import React from "react";
import InteresesForm from "./Intereses";
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

class Intereses extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_intereses: info.ingresos.intereses[0],
      intereses: [],
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
    } = this.state.datos_intereses.domicilio;

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

  setDataIntereses = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_intereses.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_intereses.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_intereses.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_intereses.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_intereses.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_intereses.ingreso_bruto_anual.moneda = getData(
          this.state.catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_intereses.ingreso_bruto_anual.unidad_temporal = getData(
          this.state.catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_intereses.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_intereses.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_intereses.observaciones = valor;
        break;
      case "rfc":
        data.datos_intereses.rfc = valor;
        break;
      case "sector_industria":
        data.datos_intereses.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_intereses.tipo_actividad_servicio = getData(
          this.state.catTiposActividades,
          valor
        );
        break;
      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_intereses.domicilio = {
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
        data.datos_intereses.domicilio.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );

        data.datos_intereses.domicilio.municipio = {
          nom_agem: "",
          cve_agem: ""
        };

        data.datos_intereses.domicilio.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catMunicipios(
          data.datos_intereses.domicilio.entidad_federativa.cve_agee
        ).then(data => {
          this.setState({ catMunicipios: data, catLocalidades: [] });
        });

        break;
      case "municipio":
        data.datos_intereses.domicilio.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        data.datos_intereses.domicilio.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catLocalidades(
          data.datos_intereses.domicilio.entidad_federativa.cve_agee,
          data.datos_intereses.domicilio.municipio.cve_agem
        ).then(data => {
          this.setState({ catLocalidades: data });
        });

        break;
      case "cp":
        data.datos_intereses.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_intereses.domicilio.localidad = getLocalidades(
          this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_intereses.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_intereses.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_intereses.domicilio.numExt = valor;
        break;
      case "numInt":
        data.datos_intereses.domicilio.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickIntereses = () => {
    let data = Object.assign({}, this.state.datos_intereses);
    let info = Object.assign({}, clean.ingresos.intereses[0]);

    this.setState(
      {
        intereses: [...this.state.intereses, data],
        datos_intereses: info
      },
      () => {
        console.log(this.state.intereses);
      }
    );
  };

  removeClickIntereses = index => event => {
    this.state.intereses.splice(index, 1);
    this.setState({ intereses: this.state.intereses }, () => {
      // console.log(this.state.intereses);
    });
  };

  render() {
    return (
      <InteresesForm
        data={this.state}
        handleChange={this.setDataIntereses}
        addClick={this.addClickIntereses}
        removeClick={this.removeClickIntereses}
      />
    );
  }
}

export default Intereses;
