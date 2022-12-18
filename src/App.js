import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Login from "./pages/Login";
import React from 'react';
import { useEffect } from 'react';
import Homepage from "./pages/Homepage";
import FormPopulationProvince from "./pages/FormPopulationProvince";
import FormTauxNataliteMortalite from "./pages/FormTauxNataliteMortalite";
import FormTauxCroissance from "./pages/FormTauxCroissance";
import FormTailleReelle from "./pages/FormTailleReelle";
import FormTauxMigration from "./pages/FormTauxMigration";
import FormPopulationTotalApresMigration from "./pages/FormPopulationTotalApresMigration";
import FormPopulationActiveOffreTravail from "./pages/FormPopulationActiveOffreTravail";
import FormDonneesConsommation from "./pages/FormDonneesConsommation";
import FormDonneesInvestissementPrive from "./pages/FormDonneesInvestissementPrive";
import FormDonneeDepenseCourante from "./pages/FormDonneeDepenseCourante";
import FormDonneeDepenseCapital from "./pages/FormDonneeDepenseCapital";
import FormDonneesDepensePublique from "./pages/FormDonneesDepensePublique";
import FormDonneeExportations from "./pages/FormDonneeExportations";
import FormDonneeImportations from "./pages/FormDonneeImportations";
import FormDemandeInterieureUrbain from "./pages/FormDemandeInterieureUrbain";
import FormDemandeInterieureRural from "./pages/FormDemandeInterieureRural";
import PopulationProvinceInfo from "./pages/PopulationProvinceInfo";
import TauxNataliteMortaliteInfo from "./pages/TauxNataliteMortaliteInfo";
import TauxCroissanceInfo from "./pages/TauxCroissanceInfo";
import TailleReellePopulationInfo from "./pages/TailleReellePopulationInfo";
import TauxMigrationInfo from "./pages/TauxMigrationInfo";
import PopulationTotalProvinceInfo from "./pages/PopulationTolalProvinceInfo";
import PopulationActiveOffreTravailInfo from "./pages/PopulationActiveOffreTravailInfo";
import DonneesConsommationInfo from "./pages/DonneesConsommationInfo";
import DonneesInvestissementPriveInfo from "./pages/DonneesInvestissementPriveInfo";
import DonneeDepenseCouranteInfo from "./pages/DonneeDepenseCouranteInfo";
import DonneeDepenseCapitalInfo from "./pages/DonneeDepenseCapitalInfo";
import DonneesDepensePubliqueInfo from "./pages/DonneesDepensePubliqueInfo";
import DonneeExportationsInfo from "./pages/DonneeExportationsInfo";
import DonneeImportationsInfo from "./pages/DonneeImportationsInfo";
import DemandeInterieureUrbaineInfo from "./pages/DemandeInterieureUrbaineInfo";
import TauxCroissanceInfoExecution from "./pages/TauxCroissanceInfoExecution";
import TailleReelleInfoExecution from "./pages/TailleReelleInfoExecution";
import PopulationTotalApresMigrationInfoExecution from "./pages/PopulationTotalApresMigrationInfoExecution";
import DonneeDepensePubliqueInfoExecution from "./pages/DonneeDepensePubliqueInfoExecution";
import DonneeExportationsNettesInfoExecution from "./pages/DonneeExportationsNettesInfoExecution";
import DemandeInterieureInfoExecution from "./pages/DemandeInterieureInfoExecution";
import DonneeExportationsNettesInfo from "./pages/DonneeExportationsNettesInfo";
import DemandeInterieureInfo from "./pages/DemandeInterieureInfo";
import ProductionDomestiqueInfo from "./pages/ProductionDomestiqueInfo";
import ProductionDomestiqueInfoExecution from "./pages/ProductionDomestiqueInfoExecution";
import ProductionDomestiqueSecteurInfoExecution from "./pages/ProductionDomestiqueSecteurInfoExecution";
import ProductionDomestiqueSecteurInfo from "./pages/ProductionDomestiqueSecteurInfo";
import PopulationActiveMenu from "./pages/PopulationActiveMenu";
import FormPopulationActiveUrbaineRurale from "./pages/FormPopulationActiveUrbaineRurale.js";
import FormPopulationActiveSecteur from "./pages/FormPopulationActiveSecteur";
import PopulationActiveUrbaineRuraleInfoExecution from "./pages/PopulationActiveUrbaineRuraleInfoExecution";
import PopulationActiveUrbaineRuraleInfo from "./pages/PopulationActiveUrbaineRuraleInfo";
import PopulationActiveSecteurInfo from "./pages/PopulationActiveSecteurInfo";
import PopulationActiveSecteurInfoExecution from "./pages/PopulationActiveSecteurInfoExecution";
import MenuPrincipal from "./pages/MenuPrincipal";
import Homepage2 from "./pages/Homepage2";
import MenuDeterminationPIB from "./pages/MenuDeterminationPIB";
import MenuCalculs from "./pages/MenuCalculs";
import FormProduction from "./pages/FormProduction";
import ProductionInfo from "./pages/ProductionInfo";
import MenuRecettes from "./pages/MenuRecettes";
import FormDGI from "./pages/FormDGI";
import ImpotDGIInfo from "./pages/ImpotDGIInfo";
import MenuDGDA from "./pages/MenuDGDA";
import FormImpoExpoDGDA from "./pages/FormImpoExpoDGDA";
import ImpoExpoDGDAInfo from "./pages/ImpoExpoDGDAInfo";
import FormRecettesDGDA from "./pages/FormRecettesDGDA";
import RecettesDGDAInfo from "./pages/RecettesDGDAInfo";
import FormDGRAD from "./pages/FormDGRAD";
import RecettesDGRADInfo from "./pages/RecettesDGRADInfo";


const useState = React.useState
function App() {

  const [username,setUsername] = useState(()=>
  {
    const localData = localStorage.getItem('username');
    return localData ? JSON.parse(localData) : "";
  });

  useEffect(() => {
    window.localStorage.setItem("username", JSON.stringify(username))
  }, [username])

  
const test= ""

const [populationInfo,setPopulationInfo] = useState(()=>
{
  const localData = localStorage.getItem('populationInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("populationInfo", JSON.stringify(populationInfo))
}, [populationInfo])



const [tauxNataliteMortaliteInfo,setTauxNataliteMortaliteInfo] = useState(()=>
{
  const localData = localStorage.getItem('tauxNataliteMortaliteInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("tauxNataliteMortaliteInfo", JSON.stringify(tauxNataliteMortaliteInfo))
}, [tauxNataliteMortaliteInfo])

const [tauxMigrationInfo,setTauxMigrationInfo] = useState(()=>
{
  const localData = localStorage.getItem('tauxMigrationInfo');
  return localData ? JSON.parse(localData) :[]; 
});

useEffect(() => {
  window.localStorage.setItem("tauxMigrationInfo", JSON.stringify(tauxMigrationInfo))
}, [tauxMigrationInfo])

const [donneeConsommationInfo,setDonneeConsommationInfo] = useState(()=>
{
  const localData = localStorage.getItem('donneeConsommationInfo');
  return localData ? JSON.parse(localData) :[]; 
});

useEffect(() => {
  window.localStorage.setItem("donneeConsommationInfo", JSON.stringify(donneeConsommationInfo))
}, [donneeConsommationInfo])

const [donneeInvestissementPriveInfo,setDonneeInvestissementPriveInfo] = useState(()=>
{
  const localData = localStorage.getItem('donneeInvestissementPriveInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("donneeInvestissementPriveInfo", JSON.stringify(donneeInvestissementPriveInfo))
}, [donneeInvestissementPriveInfo])


const [donneeDepenseCouranteInfo,setDonneeDepenseCouranteInfo] = useState(()=>
{
  const localData = localStorage.getItem('donneeDepenseCouranteInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("donneeDepenseCouranteInfo", JSON.stringify(donneeDepenseCouranteInfo))
}, [donneeDepenseCouranteInfo])

const [donneeDepenseCapitalInfo,setDonneeDepenseCapitalInfo] = useState(()=>
{
  const localData = localStorage.getItem('donneeDepenseCapitalInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("donneeDepenseCapitalInfo", JSON.stringify(donneeDepenseCapitalInfo))
}, [donneeDepenseCapitalInfo])

const [donneeExportationsInfo,setDonneeExportationsInfo] = useState(()=>
{
  const localData = localStorage.getItem('donneeExportationsInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("donneeExportationsInfo", JSON.stringify(donneeExportationsInfo))
}, [donneeExportationsInfo])



const [donneeImportationsInfo,setDonneeImportationsInfo] = useState(()=>
{
  const localData = localStorage.getItem('donneeImportationsInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("donneeImportationsInfo", JSON.stringify(donneeImportationsInfo))
}, [donneeImportationsInfo])


const [populationActiveInfo,setPopulationActiveInfo] = useState(()=>
{
  const localData = localStorage.getItem('populationActiveInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("populationActiveInfo", JSON.stringify(populationActiveInfo))
}, [populationActiveInfo])

const [populationActiveSecteurInfo,setPopulationActiveSecteurInfo] = useState(()=>
{
  const localData = localStorage.getItem('populationActiveSecteurInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("populationActiveSecteurInfo", JSON.stringify(populationActiveSecteurInfo))
}, [populationActiveSecteurInfo])

const [productionInfo,setProductionInfo] = useState(()=>
{
  const localData = localStorage.getItem('productionInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("productionInfo", JSON.stringify(productionInfo))
}, [productionInfo])

const [impotDgiInfo,setImpotDgiInfo] = useState(()=>
{
  const localData = localStorage.getItem('impotDgiInfo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("impotDgiInfo", JSON.stringify(impotDgiInfo))
}, [impotDgiInfo])



const [impotPourcentageCroissance,setImpotPourcentageCroissance] = useState(()=>
  {
    const localData = localStorage.getItem('impotPourcentageCroissance');
    return localData ? JSON.parse(localData) :0;
  });

  useEffect(() => {
    window.localStorage.setItem("impotPourcentageCroissance", JSON.stringify(impotPourcentageCroissance))
  }, [impotPourcentageCroissance])


const [infoExpoImpo,setInfoExpoImpo] = useState(()=>
{
  const localData = localStorage.getItem('infoExpoImpo');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("infoExpoImpo", JSON.stringify(infoExpoImpo))
}, [infoExpoImpo])

const [tauxExportation,setTauxExportation] = useState(()=>
  {
    const localData = localStorage.getItem('tauxExportation');
    return localData ? JSON.parse(localData) :0;
  });

  useEffect(() => {
    window.localStorage.setItem("tauxExportation", JSON.stringify(tauxExportation))
  }, [tauxExportation])

  const [tauxImportation,setTauxImportation] = useState(()=>
  {
    const localData = localStorage.getItem('tauxImportation');
    return localData ? JSON.parse(localData) :0;
  });

  useEffect(() => {
    window.localStorage.setItem("tauxImportation", JSON.stringify(tauxImportation))
  }, [tauxImportation])

const [recettesDGDA,setRecettesDGDA] = useState(()=>
{
  const localData = localStorage.getItem('recettesDGDA');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("recettesDGDA", JSON.stringify(recettesDGDA))
}, [recettesDGDA])

const [recettesDGRAD,setRecettesDGRAD] = useState(()=>
{
  const localData = localStorage.getItem('recettesDGRAD');
  return localData ? JSON.parse(localData) :[];
});

useEffect(() => {
  window.localStorage.setItem("recettesDGRAD", JSON.stringify(recettesDGRAD))
}, [recettesDGRAD])


const dataPopulation = (data)=>
{
  setPopulationInfo(data)
}

const dataTauxNataliteMortalite = (data)=>
{
  setTauxNataliteMortaliteInfo(data)
}

const dataTauxMigration = (data)=>
{
  setTauxMigrationInfo(data)
}

const dataPopulationActive = (data)=>
{
  setPopulationActiveInfo(data)
}

const dataPopulationActiveSecteur = (data)=>
{
  setPopulationActiveSecteurInfo(data)
}

const dataDonneeConsommation = (data)=>
{
  setDonneeConsommationInfo(data)
}

const dataDonneeInvestissementPrive = (data)=>
{
  setDonneeInvestissementPriveInfo(data)
}

const dataDonneeDepenseCourante = (data)=>
{
  setDonneeDepenseCouranteInfo(data)
}

const dataDonneeDepenseCapital = (data)=>
{
  setDonneeDepenseCapitalInfo(data)

}

const dataDonneeExportations = (data)=>
{
  setDonneeExportationsInfo(data)
}

const dataDonneeImportations = (data)=>
{
  setDonneeImportationsInfo(data)
}

const dataDonneeProduction = (data)=>
{
  setProductionInfo(data)
}

const dataDonneeImpotDgi = (data)=>
{
  setImpotDgiInfo(data)
}

const dataDonneeImpotPourcentageCroissance = (data)=>
{
  setImpotPourcentageCroissance(data)
}

const dataDonneeInfoExpoImpo = (data)=>
{
  setInfoExpoImpo(data)
}

const dataDonneeTauxExportation = (data)=>
{
  setTauxExportation(data)
}

const dataDonneeTauxImportation = (data)=>
{
  setTauxImportation(data)
}

const dataDonneeRecettesDgda = (data)=>
{
  setRecettesDGDA(data)
}

const dataDonneeRecettesDgrad = (data)=>
{
  setRecettesDGRAD(data)
}


return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login setUsername = {setUsername} />} >
    </Route>

    <Route path="/menu_principal" element={<MenuPrincipal username = {username} />} >
    </Route>


    <Route path="/menu_determination_pib" element={<MenuDeterminationPIB username = {username} />} >
    </Route>

    <Route path="/menu_calculs" element={<MenuCalculs username = {username} />} >
    </Route>

    <Route path="/homepage" element={<Homepage username = {username} />} >
    </Route>

    <Route path="/homepage2" element={<Homepage2 username = {username} />} >
    </Route>

    <Route path="/menu_recettes" element={<MenuRecettes username = {username} />} >
    </Route>

    <Route path="/menu_dgda" element={<MenuDGDA username = {username} />} >
    </Route>

    <Route path="/form_population_province" element={<FormPopulationProvince username = {username} dataPopulation={dataPopulation}/>} >
    </Route>

    <Route path="/form_taux_natalite_mortalite" element={<FormTauxNataliteMortalite username = {username} dataTauxNataliteMortalite={dataTauxNataliteMortalite}/>} >
    </Route>

    <Route path="/form_taux_croissance" element={<FormTauxCroissance username = {username} />} >
    </Route>

    <Route path="/form_taille_reelle" element={<FormTailleReelle username = {username} />} >
    </Route>

    <Route path="/form_taux_migration" element={<FormTauxMigration username = {username} dataTauxMigration={dataTauxMigration}/>} >
    </Route>

    <Route path="/form_population_total_apres_migration" element={<FormPopulationTotalApresMigration username = {username} />} >
    </Route>

    <Route path="/form_population_active" element={<FormPopulationActiveOffreTravail username = {username} dataPopulationActive={dataPopulationActive}/>} >
    </Route>

    <Route path="/form_donnees_consommation" element={<FormDonneesConsommation username = {username} dataDonneeConsommation={dataDonneeConsommation}/>} >
    </Route>

    <Route path="/form_investissement_prive" element={<FormDonneesInvestissementPrive username = {username} dataDonneeInvestissementPrive={dataDonneeInvestissementPrive}/>} >
    </Route>

    <Route path="/form_depense_courante" element={<FormDonneeDepenseCourante username = {username} dataDonneeDepenseCourante={dataDonneeDepenseCourante}/>} >
    </Route>

    <Route path="/form_depense_capital" element={<FormDonneeDepenseCapital username = {username} dataDonneeDepenseCapital={dataDonneeDepenseCapital}/>} >
    </Route>

    <Route path="/form_depense_publique" element={<FormDonneesDepensePublique username = {username} />} >
    </Route>

    <Route path="/form_donnee_exportations" element={<FormDonneeExportations username = {username} dataDonneeExportations={dataDonneeExportations}/>} >
    </Route>

    <Route path="/form_donnee_importations" element={<FormDonneeImportations username = {username} dataDonneeImportations={dataDonneeImportations}/>} >
    </Route>

    <Route path="/form_demande_interieure_urbain" element={<FormDemandeInterieureUrbain username = {username} />} >
    </Route>

    <Route path="/form_demande_interieure_rural" element={<FormDemandeInterieureRural username = {username} />} >
    </Route>

    <Route path="/form_population_active_milieu_urbain_rural" element={<FormPopulationActiveUrbaineRurale username = {username} dataPopulationActive={dataPopulationActive}/>} >
    </Route>

    <Route path="/form_population_active_secteur" element={<FormPopulationActiveSecteur username = {username} dataPopulationActiveSecteur={dataPopulationActiveSecteur}/>} >
    </Route>

    <Route path="/form_production" element={<FormProduction username = {username} dataDonneeProduction={dataDonneeProduction}/>} >
    </Route>

    <Route path="/form_dgi" element={<FormDGI username = {username} dataDonneeImpotDgi={dataDonneeImpotDgi}  dataDonneeImpotPourcentageCroissance={dataDonneeImpotPourcentageCroissance}/>} >
    </Route>

    <Route path="/form_dgda_import_export" element={<FormImpoExpoDGDA username = {username} dataDonneeInfoExpoImpo={dataDonneeInfoExpoImpo} dataDonneeTauxExportation={dataDonneeTauxExportation} dataDonneeTauxImportation={dataDonneeTauxImportation} impotDgiInfo={impotDgiInfo} impotPourcentageCroissance={impotPourcentageCroissance}/>} >
    </Route>

    <Route path="/form_recettes_dgda" element={<FormRecettesDGDA username = {username} dataDonneeRecettesDgda={dataDonneeRecettesDgda}/>} >
    </Route>

    <Route path="/form_recettes_dgrad" element={<FormDGRAD username = {username} dataDonneeRecettesDgrad={dataDonneeRecettesDgrad}/>} >
    </Route>
    
    <Route path="/population_active_menu" element={<PopulationActiveMenu username = {username} />} >
    </Route>

    <Route path="/population_province_info" element={<PopulationProvinceInfo username = {username} populationInfo={populationInfo} />} >
    </Route>

    <Route path="/taux_natalite_mortalite_info" element={<TauxNataliteMortaliteInfo username = {username} tauxNataliteMortaliteInfo={tauxNataliteMortaliteInfo}/>} >
    </Route>

    <Route path="/taux_croissance_info" element={<TauxCroissanceInfo username = {username} tauxNataliteMortaliteInfo={tauxNataliteMortaliteInfo}/>} >
    </Route>

    <Route path="/taille_reelle_population_info" element={<TailleReellePopulationInfo username = {username} tauxNataliteMortaliteInfo={tauxNataliteMortaliteInfo} populationInfo={populationInfo}/>} >
    </Route>

    <Route path="/taux_migration_info" element={<TauxMigrationInfo username = {username} tauxMigrationInfo={tauxMigrationInfo}/>} >
    </Route>

    <Route path="/population_total_info" element={<PopulationTotalProvinceInfo username = {username} tauxNataliteMortaliteInfo={tauxNataliteMortaliteInfo} populationInfo={populationInfo} tauxMigrationInfo={tauxMigrationInfo}/>} >
    </Route>

    <Route path="/population_active_urbaine_rurale_info" element={<PopulationActiveUrbaineRuraleInfo username = {username}  dataPopulation = {dataPopulation} dataTauxNataliteMortalite={dataTauxNataliteMortalite} dataTauxMigration={dataTauxMigration} tauxNataliteMortaliteInfo={tauxNataliteMortaliteInfo} populationInfo={populationInfo} tauxMigrationInfo={tauxMigrationInfo} populationActiveInfo={populationActiveInfo}/>} >
    </Route>

    <Route path="/population_active_secteur_info" element={<PopulationActiveSecteurInfo username = {username}  dataPopulation = {dataPopulation} dataTauxNataliteMortalite={dataTauxNataliteMortalite} dataTauxMigration={dataTauxMigration} tauxNataliteMortaliteInfo={tauxNataliteMortaliteInfo} populationInfo={populationInfo} tauxMigrationInfo={tauxMigrationInfo} populationActiveSecteurInfo={populationActiveSecteurInfo} populationActiveInfo={populationActiveInfo}/>} >
    </Route>

    <Route path="/population_active_offre_travail" element={<PopulationActiveOffreTravailInfo username = {username} populationActiveInfo={populationActiveInfo}/>} >
    </Route>

    <Route path="/donnees_consommation_info" element={<DonneesConsommationInfo username = {username} donneeConsommationInfo={donneeConsommationInfo}/>} >
    </Route>

    <Route path="/donnees_investissement_info" element={<DonneesInvestissementPriveInfo username = {username} donneeInvestissementPriveInfo={donneeInvestissementPriveInfo}/>} >
    </Route>

    <Route path="/donnees_depense_courante_info" element={<DonneeDepenseCouranteInfo username = {username} donneeDepenseCouranteInfo={donneeDepenseCouranteInfo}/>} >
    </Route>

    <Route path="/donnees_depense_capital_info" element={<DonneeDepenseCapitalInfo username = {username} donneeDepenseCapitalInfo={donneeDepenseCapitalInfo}/>} >
    </Route>

    <Route path="/donnees_depense_publique_info_execution" element={<DonneeDepensePubliqueInfoExecution username = {username} dataDonneeDepenseCourante={dataDonneeDepenseCourante} dataDonneeDepenseCapital={dataDonneeDepenseCapital} donneeDepenseCouranteInfo={donneeDepenseCouranteInfo} donneeDepenseCapitalInfo={donneeDepenseCapitalInfo}/>} >
    </Route>

    <Route path="/donnees_depense_publique" element={<DonneesDepensePubliqueInfo username = {username} donneeDepenseCouranteInfo={donneeDepenseCouranteInfo} donneeDepenseCapitalInfo={donneeDepenseCapitalInfo}/>} >
    </Route>

    <Route path="/donnees_exportations_info" element={<DonneeExportationsInfo username = {username} donneeExportationsInfo={donneeExportationsInfo}/>} >
    </Route>

    <Route path="/donnees_importations_info" element={<DonneeImportationsInfo username = {username} donneeImportationsInfo={donneeImportationsInfo}/>} >
    </Route>

    <Route path="/donnees_exportations_nettes_info" element={<DonneeExportationsNettesInfo username = {username} donneeExportationsInfo={donneeExportationsInfo} donneeImportationsInfo={donneeImportationsInfo}/>} >
    </Route>

    <Route path="/demande_interieure_info" element={<DemandeInterieureInfo username = {username} donneeConsommationInfo={donneeConsommationInfo} donneeInvestissementPriveInfo={donneeInvestissementPriveInfo} donneeDepenseCouranteInfo={donneeDepenseCouranteInfo} donneeDepenseCapitalInfo={donneeDepenseCapitalInfo}/>} >
    </Route>

    <Route path="/production_domestique_info" element={<ProductionDomestiqueInfo username = {username} donneeConsommationInfo={donneeConsommationInfo} donneeInvestissementPriveInfo={donneeInvestissementPriveInfo} donneeDepenseCouranteInfo={donneeDepenseCouranteInfo} donneeDepenseCapitalInfo={donneeDepenseCapitalInfo} donneeExportationsInfo={donneeExportationsInfo} donneeImportationsInfo={donneeImportationsInfo}/>} >
    </Route>
    
    <Route path="/production_domestique_secteur_info" element={<ProductionDomestiqueSecteurInfo username = {username} donneeConsommationInfo={donneeConsommationInfo} donneeInvestissementPriveInfo={donneeInvestissementPriveInfo} donneeDepenseCouranteInfo={donneeDepenseCouranteInfo} donneeDepenseCapitalInfo={donneeDepenseCapitalInfo} donneeExportationsInfo={donneeExportationsInfo} donneeImportationsInfo={donneeImportationsInfo}/>} >
    </Route>


    <Route path="/demande_interieure_urbaine" element={<DemandeInterieureUrbaineInfo username = {username} />} >
    </Route>

    <Route path="/donnee_production_info" element={<ProductionInfo username = {username} productionInfo={productionInfo}/>} >
    </Route>

    <Route path="/impot_dgi_info" element={<ImpotDGIInfo username = {username} impotDgiInfo={impotDgiInfo} impotPourcentageCroissance={impotPourcentageCroissance}/>} >
    </Route>

    <Route path="/impo_expo_dgda_info" element={<ImpoExpoDGDAInfo username = {username} infoExpoImpo={infoExpoImpo} tauxExportation={tauxExportation} tauxImportation={tauxImportation} impotDgiInfo={impotDgiInfo} impotPourcentageCroissance={impotPourcentageCroissance}/>} >
    </Route>

    <Route path="/recettes_dgda_info" element={<RecettesDGDAInfo username = {username} recettesDGDA={recettesDGDA} infoExpoImpo={infoExpoImpo} impotDgiInfo={impotDgiInfo} impotPourcentageCroissance={impotPourcentageCroissance} tauxExportation={tauxExportation} tauxImportation={tauxImportation}/>} >
    </Route>

    <Route path="/recettes_dgrad_info" element={<RecettesDGRADInfo username = {username} recettesDGRAD={recettesDGRAD}  impotDgiInfo={impotDgiInfo} impotPourcentageCroissance={impotPourcentageCroissance} />} >
    </Route>

    
    

    <Route path="/taux_croissance_info_execution" element={<TauxCroissanceInfoExecution username = {username} dataTauxNataliteMortalite={dataTauxNataliteMortalite} tauxNataliteMortaliteInfo={tauxNataliteMortaliteInfo}/>} >
    </Route>

    <Route path="/taille_reelle_population_execution" element={<TailleReelleInfoExecution username = {username} dataPopulation = {dataPopulation} dataTauxNataliteMortalite={dataTauxNataliteMortalite} tauxNataliteMortaliteInfo={tauxNataliteMortaliteInfo} populationInfo={populationInfo}/>} >
    </Route>

    <Route path="/Population_Total_ApresMigration_Info_Execution" element={<PopulationTotalApresMigrationInfoExecution username = {username} dataPopulation = {dataPopulation} dataTauxNataliteMortalite={dataTauxNataliteMortalite} dataTauxMigration={dataTauxMigration} tauxNataliteMortaliteInfo={tauxNataliteMortaliteInfo} populationInfo={populationInfo} tauxMigrationInfo={tauxMigrationInfo}/>} >
    </Route>

    <Route path="/donnee_exportations_nettes_info_execution" element={<DonneeExportationsNettesInfoExecution username = {username} dataDonneeExportations={dataDonneeExportations} dataDonneeImportations={dataDonneeImportations} donneeExportationsInfo={donneeExportationsInfo} donneeImportationsInfo={donneeImportationsInfo}/>}>
    </Route>

    <Route path="/donnee_demande_interieure_info_execution" element={<DemandeInterieureInfoExecution username = {username} dataDonneeConsommation={dataDonneeConsommation} dataDonneeInvestissementPrive={dataDonneeInvestissementPrive} dataDonneeDepenseCourante={dataDonneeDepenseCourante} dataDonneeDepenseCapital={dataDonneeDepenseCapital} donneeConsommationInfo={donneeConsommationInfo} donneeInvestissementPriveInfo={donneeInvestissementPriveInfo} donneeDepenseCouranteInfo={donneeDepenseCouranteInfo} donneeDepenseCapitalInfo={donneeDepenseCapitalInfo}/>}>
    </Route>

    <Route path="/production_domestique_info_execution" element={<ProductionDomestiqueInfoExecution username = {username} dataDonneeConsommation={dataDonneeConsommation} dataDonneeInvestissementPrive={dataDonneeInvestissementPrive} dataDonneeDepenseCourante={dataDonneeDepenseCourante} dataDonneeDepenseCapital={dataDonneeDepenseCapital} donneeConsommationInfo={donneeConsommationInfo} donneeInvestissementPriveInfo={donneeInvestissementPriveInfo} donneeDepenseCouranteInfo={donneeDepenseCouranteInfo} donneeDepenseCapitalInfo={donneeDepenseCapitalInfo} donneeExportationsInfo={donneeExportationsInfo} donneeImportationsInfo={donneeImportationsInfo}/>}>
    </Route>

    <Route path="/production_domestique_secteur_info_execution" element={<ProductionDomestiqueSecteurInfoExecution username = {username} dataDonneeConsommation={dataDonneeConsommation} dataDonneeInvestissementPrive={dataDonneeInvestissementPrive} dataDonneeDepenseCourante={dataDonneeDepenseCourante} dataDonneeDepenseCapital={dataDonneeDepenseCapital} donneeConsommationInfo={donneeConsommationInfo} donneeInvestissementPriveInfo={donneeInvestissementPriveInfo} donneeDepenseCouranteInfo={donneeDepenseCouranteInfo} donneeDepenseCapitalInfo={donneeDepenseCapitalInfo} donneeExportationsInfo={donneeExportationsInfo} donneeImportationsInfo={donneeImportationsInfo}/>}>
    </Route>

    <Route path="/population_active_urbaine_rurale_info_execution" element={<PopulationActiveUrbaineRuraleInfoExecution username = {username}  populationActiveInfo={populationActiveInfo} />}>
    </Route>

    <Route path="/population_active_secteur_info_execution" element={<PopulationActiveSecteurInfoExecution username = {username}  populationActiveSecteurInfo={populationActiveSecteurInfo} />}>
    </Route>

    </Routes>
    </BrowserRouter>

  );
}

export default App;

