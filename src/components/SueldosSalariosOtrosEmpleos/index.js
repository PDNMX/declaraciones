import React from "react";
import SueldosSalariosOtrosEmpleosForm from "./SueldosSalariosOtrosEmpleos";
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

class SueldosSalariosOtrosEmpleos extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_sueldos_salarios_otros_empleos:
        info.ingresos.sueldos_salarios_otros_empleos[0],
      sueldos_salarios_otros_empleos: [],
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
    } = this.state.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga;

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

  setDataSueldosSalariosOtrosEmpleos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_sueldos_salarios_otros_empleos.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_sueldos_salarios_otros_empleos.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_sueldos_salarios_otros_empleos.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.moneda = getData(
          this.state.catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.unidad_temporal = getData(
          this.state.catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_sueldos_salarios_otros_empleos.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_sueldos_salarios_otros_empleos.observaciones = valor;
        break;
      case "rfc":
        data.datos_sueldos_salarios_otros_empleos.rfc = valor;
        break;
      case "sector_industria":
        data.datos_sueldos_salarios_otros_empleos.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_sueldos_salarios_otros_empleos.tipo_actividad_servicio = getData(
          this.state.catTiposActividades,
          valor
        );
        break;
      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga = {
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
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );

        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.municipio = {
          nom_agem: "",
          cve_agem: ""
        };

        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catMunicipios(
          data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga
            .entidad_federativa.cve_agee
        ).then(data => {
          this.setState({ catMunicipios: data, catLocalidades: [] });
        });

        break;
      case "municipio":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catLocalidades(
          data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga
            .entidad_federativa.cve_agee,
          data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga
            .municipio.cve_agem
        ).then(data => {
          this.setState({ catLocalidades: data });
        });

        break;
      case "cp":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.cp = valor;
        break;
      case "localidad":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.localidad = getLocalidades(
          this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.numExt = valor;
        break;
      case "numInt":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickSueldosSalariosOtrosEmpleos = () => {
    let data = Object.assign(
      {},
      this.state.datos_sueldos_salarios_otros_empleos
    );
    let info = Object.assign(
      {},
      clean.ingresos.sueldos_salarios_otros_empleos[0]
    );

    this.setState(
      {
        sueldos_salarios_otros_empleos: [
          ...this.state.sueldos_salarios_otros_empleos,
          data
        ],
        datos_sueldos_salarios_otros_empleos: info
      },
      () => {
        console.log(this.state.sueldos_salarios_otros_empleos);
      }
    );
  };

  removeClickSueldosSalariosOtrosEmpleos = index => event => {
    this.state.sueldos_salarios_otros_empleos.splice(index, 1);
    this.setState(
      {
        sueldos_salarios_otros_empleos: this.state
          .sueldos_salarios_otros_empleos
      },
      () => {
        // console.log(this.state.sueldos_salarios_otros_empleos);
      }
    );
  };

  render() {
    return (
      <SueldosSalariosOtrosEmpleosForm
        data={this.state}
        handleChange={this.setDataSueldosSalariosOtrosEmpleos}
        addClick={this.addClickSueldosSalariosOtrosEmpleos}
        removeClick={this.removeClickSueldosSalariosOtrosEmpleos}
      />
    );
  }
}

export default SueldosSalariosOtrosEmpleos;
