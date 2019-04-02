import React from "react";
import EnajenacionBienesForm from "./EnajenacionBienes";
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
  catTipoBien,
  catSectorIndustria,
  catTiposActividades,
  catTipoMoneda,
  catMedidaPlazo
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class EnajenacionBienes extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_enajenacion_bienes: info.ingresos.enajenacion_bienes[0],
      enajenacion_bienes: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catTipoBien: [],
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
    } = this.state.datos_enajenacion_bienes.domicilio_bien_enajenado;

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
    catTipoBien().then(data => {
      this.setState({ catTipoBien: data });
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

  setDataEnajenacionBienes = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_enajenacion_bienes.curp = valor;
        break;
      case "descripcion_bien":
        data.datos_enajenacion_bienes.descripcion_bien = valor;
        break;

      case "tipo_bien":
        data.datos_enajenacion_bienes.tipo_bien = getData(
          this.state.catTipoBien,
          valor
        );
        break;
      case "id":
        data.datos_enajenacion_bienes.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.moneda = getData(
          this.state.catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.unidad_temporal = getData(
          this.state.catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion":
        data.datos_enajenacion_bienes.nombre_denominacion = valor;
        break;
      case "observaciones":
        data.datos_enajenacion_bienes.observaciones = valor;
        break;
      case "rfc":
        data.datos_enajenacion_bienes.rfc = valor;
        break;
      case "sector_industria":
        data.datos_enajenacion_bienes.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_enajenacion_bienes.tipo_actividad_servicio = getData(
          this.state.catTiposActividades,
          valor
        );
        break;

      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado = {
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
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );

        data.datos_enajenacion_bienes.domicilio_bien_enajenado.municipio = {
          nom_agem: "",
          cve_agem: ""
        };

        data.datos_enajenacion_bienes.domicilio_bien_enajenado.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catMunicipios(
          data.datos_enajenacion_bienes.domicilio_bien_enajenado
            .entidad_federativa.cve_agee
        ).then(data => {
          this.setState({ catMunicipios: data, catLocalidades: [] });
        });

        break;
      case "municipio":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        data.datos_enajenacion_bienes.domicilio_bien_enajenado.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catLocalidades(
          data.datos_enajenacion_bienes.domicilio_bien_enajenado
            .entidad_federativa.cve_agee,
          data.datos_enajenacion_bienes.domicilio_bien_enajenado.municipio
            .cve_agem
        ).then(data => {
          this.setState({ catLocalidades: data });
        });

        break;
      case "cp":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.cp = valor;
        break;
      case "localidad":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.localidad = getLocalidades(
          this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.numExt = valor;
        break;
      case "numInt":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickEnajenacionBienes = () => {
    let data = Object.assign({}, this.state.datos_enajenacion_bienes);
    let info = Object.assign({}, clean.ingresos.enajenacion_bienes[0]);

    this.setState(
      {
        enajenacion_bienes: [...this.state.enajenacion_bienes, data],
        datos_enajenacion_bienes: info
      },
      () => {
        console.log(this.state.enajenacion_bienes);
      }
    );
  };

  removeClickEnajenacionBienes = index => event => {
    this.state.enajenacion_bienes.splice(index, 1);
    this.setState({ enajenacion_bienes: this.state.enajenacion_bienes }, () => {
      // console.log(this.state.enajenacion_bienes);
    });
  };

  render() {
    return (
      <EnajenacionBienesForm
        data={this.state}
        handleChange={this.setDataEnajenacionBienes}
        addClick={this.addClickEnajenacionBienes}
        removeClick={this.removeClickEnajenacionBienes}
      />
    );
  }
}

export default EnajenacionBienes;
