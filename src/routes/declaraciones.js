import InformacionPersonal from "../components/Prueba/";
import MIntereses from "../components/Prueba/";
import Ingresos from "../components/Prueba/";
import Activos from "../components/Prueba/";
import Pasivos from "../components/Prueba/";
import InformacionGeneral from "../components/InformacionGeneral/";
import DatosCurriculares from "../components/DatosCurriculares/";
import DatosEncargoActual from "../components/DatosEncargoActual/";
import ExperienciaLaboral from "../components/ExperienciaLaboral/";
import DependientesEconomicos from "../components/DependientesEconomicos/";
import EmpresasSociedadesAsociaciones from "../components/EmpresasSociedadesAsociaciones/";
import Membresias from "../components/Membresias/";
import ApoyosBeneficiosPublicos from "../components/ApoyosBeneficiosPublicos/";
import RepresentacionActiva from "../components/RepresentacionActiva/";
import RepresentacionPasiva from "../components/RepresentacionPasiva/";
import SociosComerciales from "../components/SociosComerciales/";
import ClientesPricipales from "../components/ClientesPricipales/";
import OtrasPartesRelacionadas from "../components/OtrasPartesRelacionadas/";
import BeneficiosGratuitos from "../components/BeneficiosGratuitos/";
import SueldosSalariosPublicos from "../components/SueldosSalariosPublicos/";
import SueldosSalariosOtrosEmpleos from "../components/SueldosSalariosOtrosEmpleos/";
import ActividadProfesional from "../components/ActividadProfesional/";
import ActividadEmpresarial from "../components/ActividadEmpresarial/";
import ActividadEconomicaMenor from "../components/ActividadEconomicaMenor/";
import Arrendamiento from "../components/Arrendamiento/";
import Intereses from "../components/Intereses/";
import Premios from "../components/Premios/";
import EnajenacionBienes from "../components/EnajenacionBienes/";
import OtrosIngresos from "../components/OtrosIngresos/";
import BienesInmuebles from "../components/BienesInmuebles/";
import BienesMuebles from "../components/BienesMuebles/";
import BienesMueblesNoRegistrables from "../components/BienesMueblesNoRegistrables/";
import InversionesCuentasValores from "../components/InversionesCuentasValores/";
import EfectivoMetales from "../components/EfectivoMetales/";
import Fideicomisos from "../components/Fideicomisos/";
import BienesIntangibles from "../components/BienesIntangibles/";
import CuentasCobrar from "../components/CuentasCobrar/";
import UsoEspeciePropiedadTercero from "../components/UsoEspeciePropiedadTercero/";
import Deudas from "../components/Deudas/";
import OtrasObligaciones from "../components/OtrasObligaciones/";

const routes = [
  {
    name: "Información personal",
    path: "/informacionpersonal",
    component: InformacionPersonal,
    private: true,
    key: 10,
    childs: [
      {
        name: "I. Información general",
        path: "/informaciongeneral",
        component: InformacionGeneral,
        private: true,
        key: 11
      },
      {
        name: "II. Datos Curriculares",
        path: "/datoscurriculares",
        component: DatosCurriculares,
        private: true,
        key: 12
      },
      {
        name: "III. Datos del encargo actual",
        path: "/encargoactual",
        component: DatosEncargoActual,
        private: true,
        key: 13
      },
      {
        name: "IV. Experiencia laboral",
        path: "/experiencialaboral",
        component: ExperienciaLaboral,
        private: true,
        key: 14
      },
      {
        name: "V. Dependientes económicos",
        path: "/dependienteseconomicos",
        component: DependientesEconomicos,
        private: true,
        key: 15
      }
    ]
  },
  {
    name: "Intereses",
    path: "/intereses",
    component: MIntereses,
    private: true,
    key: 20,
    childs: [
      {
        name: "I. Empresas, sociedades o asociaciones",
        path: "/empresassociedadesasociaciones",
        component: EmpresasSociedadesAsociaciones,
        private: true,
        key: 21
      },
      {
        name: "II. Membresías",
        path: "/membresias",
        component: Membresias,
        private: true,
        key: 22
      },
      {
        name: "III. Apoyos o beneficios publicos",
        path: "/apoyosbeneficiospublicos",
        component: ApoyosBeneficiosPublicos,
        private: true,
        key: 23
      },
      {
        name: "IV. Representación activa",
        path: "/representacionactiva",
        component: RepresentacionActiva,
        private: true,
        key: 24
      },
      {
        name: "V. Representación pasiva",
        path: "/representacionpasiva",
        component: RepresentacionPasiva,
        private: true,
        key: 25
      },
      {
        name: "VI. Socios comerciales",
        path: "/socioscomerciales",
        component: SociosComerciales,
        private: true,
        key: 26
      },
      {
        name: "VII. Clientes principales",
        path: "/clientesprincipales",
        component: ClientesPricipales,
        private: true,
        key: 27
      },
      {
        name: "VIII. Otras partes relacionadas",
        path: "/otraspartesrelacionadas",
        component: OtrasPartesRelacionadas,
        private: true,
        key: 28
      },
      {
        name: "IX.  Beneficios gratuitos distintos a efectivo y bienes",
        path: "/beneficiosgratuitos",
        component: BeneficiosGratuitos,
        private: true,
        key: 29
      }
    ]
  },
  {
    name: "Ingresos",
    path: "/ingresos",
    component: Ingresos,
    private: true,
    key: 30,
    childs: [
      {
        name: "I. Sueldos y salarios públicos",
        path: "/sueldossalariospublicos",
        component: SueldosSalariosPublicos,
        private: true,
        key: 31
      },
      {
        name: "II. Sueldos y salarios por otros empleos",
        path: "/sueldossalariosotrosempleos",
        component: SueldosSalariosOtrosEmpleos,
        private: true,
        key: 32
      },
      {
        name: "III. Actividad profesional",
        path: "/actividadprofesional",
        component: ActividadProfesional,
        private: true,
        key: 33
      },
      {
        name: "IV. Actividad empresarial",
        path: "/actividadempresarial",
        component: ActividadEmpresarial,
        private: true,
        key: 34
      },
      {
        name: "V. Actividad económica menor",
        path: "/actividadeconomicamenor",
        component: ActividadEconomicaMenor,
        private: true,
        key: 35
      },
      {
        name: "VI. Arrendamiento",
        path: "/arrendamiento",
        component: Arrendamiento,
        private: true,
        key: 36
      },
      {
        name: "VII. Intereses",
        path: "/intereses",
        component: Intereses,
        private: true,
        key: 37
      },
      {
        name: "VIII. Premios",
        path: "/premios",
        component: Premios,
        private: true,
        key: 38
      },
      {
        name: "IX. Enajenación de bienes",
        path: "/enajenacionbienes",
        component: EnajenacionBienes,
        private: true,
        key: 39
      },
      {
        name: "X. Otros ingresos",
        path: "/otrosingresos",
        component: OtrosIngresos,
        private: true,
        key: 40
      }
    ]
  },
  {
    name: "Activos",
    path: "/activos",
    component: Activos,
    private: true,
    key: 50,
    childs: [
      {
        name: "I.  Bienes inmuebles",
        path: "/bienesinmuebles",
        component: BienesInmuebles,
        private: true,
        key: 51
      },
      {
        name: "II. Bienes muebles",
        path: "/bienesmuebles",
        component: BienesMuebles,
        private: true,
        key: 52
      },
      {
        name: "III.  Bienes muebles no registrables",
        path: "/bienesmueblesnoregistrables",
        component: BienesMueblesNoRegistrables,
        private: true,
        key: 53
      },
      {
        name: "IV. Inversiones, cuentas y valores",
        path: "/inversionescuentasvalores",
        component: InversionesCuentasValores,
        private: true,
        key: 54
      },
      {
        name: "V. Efectivo y metales",
        path: "/efectivometales",
        component: EfectivoMetales,
        private: true,
        key: 55
      },
      {
        name: "VI. Fideicomisos",
        path: "/fideicomisos",
        component: Fideicomisos,
        private: true,
        key: 56
      },
      {
        name: "VII. Bienes intangibles",
        path: "/bienesintangibles",
        component: BienesIntangibles,
        private: true,
        key: 57
      },
      {
        name: "VIII. Cuentas por cobrar",
        path: "/cuentascobrar",
        component: CuentasCobrar,
        private: true,
        key: 58
      },
      {
        name: "IX. Uso o beneficios en especie propiedad de un tercero",
        path: "/usoespeciepropiedadtercero",
        component: UsoEspeciePropiedadTercero,
        private: true,
        key: 59
      }
    ]
  },
  {
    name: "Pasivos",
    path: "/pasivos",
    component: Pasivos,
    private: true,
    key: 60,
    childs: [
      {
        name: "I.  Deudas",
        path: "/deudas",
        component: Deudas,
        private: true,
        key: 61
      },
      {
        name: "II. Otras obligaciones",
        path: "/otrasobligaciones",
        component: OtrasObligaciones,
        private: true,
        key: 62
      }
    ]
  }
];

export default routes;
