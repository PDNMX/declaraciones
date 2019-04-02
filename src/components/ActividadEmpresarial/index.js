import React from "react";

import ActividadEmpresarialForm from "./ActividadEmpresarial";
import {
  getData,
  catPaises,
  getEntidadesFederativas,
  catEntidadesFederativas,
  getMunicipios,
  catMunicipios,
  getLocalidades,
  catLocalidades,
  catTipoVialidad,
  catSectorIndustria,
  catTiposActividades,
  catTipoMoneda,
  catMedidaPlazo
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";
class ActividadEmpresarial extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_actividad_empresarial: info.ingresos.actividad_empresarial[0],
      actividad_empresarial: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catSectorIndustria: [],
      catTiposActividades: [],
      catTipoMoneda: [],
      catMedidaPlazo: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    let {
      entidad_federativa,
      municipio
    } = this.state.datos_actividad_empresarial.domicilio_actividad_empresarial;

    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });

    if (entidad_federativa.cve_agee !== "") {
      catMunicipios(entidad_federativa.cve_agee).then(data => {
        this.setState({ catMunicipios: data });
      });

      if (municipio.cve_agem !== "") {
        catLocalidades(entidad_federativa.cve_agee, municipio.cve_agem).then(
          data => {
            this.setState({ catLocalidades: data });
          }
        );
      }
    }

    catTipoVialidad().then(data => {
      this.setState({ catTipoVialidad: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
    catTiposActividades().then(data => {
      this.setState({ catTiposActividades: data });
    });
    catTipoMoneda().then(data => {
      this.setState({ catTipoMoneda: data });
    });
    catMedidaPlazo().then(data => {
      this.setState({ catMedidaPlazo: data });
    });
  }

  setDataActividadEmpresarial = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_actividad_empresarial.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_actividad_empresarial.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_actividad_empresarial.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.datos_actividad_empresarial.ingreso_bruto_anual.valor = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_actividad_empresarial.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_actividad_empresarial.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_actividad_empresarial.ingreso_bruto_anual.moneda = getData(
          this.state.catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_actividad_empresarial.ingreso_bruto_anual.unidad_temporal = getData(
          this.state.catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual.valor":
        data.datos_actividad_empresarial.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_actividad_empresarial.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_actividad_empresarial.observaciones = valor;
        break;
      case "rfc":
        data.datos_actividad_empresarial.rfc = valor;
        break;
      case "sector_industria":
        data.datos_actividad_empresarial.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_actividad_empresarial.tipo_actividad_servicio = getData(
          this.state.catTiposActividades,
          valor
        );
        break;
      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial = {
          pais: getData(this.state.catPaises, valor),
          entidad_federativa: {
            nom_agee: "",
            cve_agee: ""
          },
          municipio: {
            nom_agem: "",
            cve_agem: ""
          },
          cp: "",
          localidad: {
            nom_loc: "",
            cve_loc: ""
          },
          vialidad: {
            tipo_vial: "",
            nom_vial: ""
          },
          numExt: "",
          numInt: ""
        };

        break;
      case "entidad_federativa":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );

        data.datos_actividad_empresarial.domicilio_actividad_empresarial.municipio = {
          nom_agem: "",
          cve_agem: ""
        };

        data.datos_actividad_empresarial.domicilio_actividad_empresarial.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catMunicipios(
          data.datos_actividad_empresarial.domicilio_actividad_empresarial
            .entidad_federativa.cve_agee
        ).then(data => {
          this.setState({ catMunicipios: data, catLocalidades: [] });
        });

        break;
      case "municipio":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        data.datos_actividad_empresarial.domicilio_actividad_empresarial.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catLocalidades(
          data.datos_actividad_empresarial.domicilio_actividad_empresarial
            .entidad_federativa.cve_agee,
          data.datos_actividad_empresarial.domicilio_actividad_empresarial
            .municipio.cve_agem
        ).then(data => {
          this.setState({ catLocalidades: data });
        });

        break;
      case "cp":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.cp = valor;
        break;
      case "localidad":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.localidad = getLocalidades(
          this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.numExt = valor;
        break;
      case "numInt":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.numInt = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickActividadEmpresarial = () => {
    let data = Object.assign({}, this.state.datos_actividad_empresarial);
    let info = Object.assign({}, clean.ingresos.actividad_empresarial[0]);

    this.setState(
      {
        actividad_empresarial: [...this.state.actividad_empresarial, data],
        datos_actividad_empresarial: info
      },
      () => {
        console.log(this.state.actividad_empresarial);
      }
    );
  };

  removeClickActividadEmpresarial = index => event => {
    this.state.actividad_empresarial.splice(index, 1);
    this.setState(
      { actividad_empresarial: this.state.actividad_empresarial },
      () => {
        // console.log(this.state.actividad_empresarial);
      }
    );
  };

  render() {
    return (
      <ActividadEmpresarialForm
        data={this.state}
        handleChange={this.setDataActividadEmpresarial}
        addClick={this.addClickActividadEmpresarial}
        removeClick={this.removeClickActividadEmpresarial}
      />
    );
  }
}

export default ActividadEmpresarial;
