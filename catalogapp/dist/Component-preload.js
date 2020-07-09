//@ui5-bundle com/catafdd/com/catalogapp/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/catafdd/com/catalogapp/Component.js":function(){sap.ui.define(["sap/suite/ui/generic/template/lib/AppComponent"],function(e){return e.extend("com.catafdd.com.catalogapp.Component",{metadata:{manifest:"json"}})});
},
	"com/catafdd/com/catalogapp/annotations/annotation.xml":'<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0"><edmx:Reference Uri="/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_COMMON\',Version=\'0001\',SAP__Origin=\'LOCAL\')/$value"><edmx:Include Namespace="com.sap.vocabularies.Common.v1" Alias="Common"/></edmx:Reference><edmx:Reference Uri="/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_UI\',Version=\'0001\',SAP__Origin=\'LOCAL\')/$value"><edmx:Include Namespace="com.sap.vocabularies.UI.v1" Alias="UI"/></edmx:Reference><edmx:Reference Uri="/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_COMMUNICATION\',Version=\'0001\',SAP__Origin=\'LOCAL\')/$value"><edmx:Include Namespace="com.sap.vocabularies.Communication.v1" Alias="Communication"/></edmx:Reference><edmx:Reference Uri="/sap/opu/odata/ui2/PAGE_BUILDER_PERS/$metadata"><edmx:Include Namespace="PAGE_BUILDER_PERS"/></edmx:Reference><edmx:DataServices><Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="com.catafdd.com"></Schema></edmx:DataServices></edmx:Edmx>',
	"com/catafdd/com/catalogapp/i18n/i18n.properties":'# This is the resource bundle for catalogapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=My Catalog Application\n\n#YDES: Application description\nappDescription=The catalog application',
	"com/catafdd/com/catalogapp/localService/metadata.xml":'<?xml version="1.0" encoding="utf-8"?><edmx:Edmx Version="1.0" xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:sap="http://www.sap.com/Protocols/SAPData"><edmx:DataServices m:DataServiceVersion="2.0"><Schema Namespace="PAGE_BUILDER_PERS" xml:lang="en" sap:schema-version="1" xmlns="http://schemas.microsoft.com/ado/2008/09/edm"><EntityType Name="Catalog" sap:content-version="1"><Key><PropertyRef Name="id"/></Key><Property Name="id" Type="Edm.String" Nullable="false"/><Property Name="type" Type="Edm.String" sap:updatable="false"/><Property Name="domainId" Type="Edm.String"/><Property Name="remoteType" Type="Edm.String"/><Property Name="title" Type="Edm.String"/><Property Name="systemAlias" Type="Edm.String"/><Property Name="remoteId" Type="Edm.String"/><Property Name="isReadOnly" Type="Edm.String" MaxLength="1"/><Property Name="originalLanguage" Type="Edm.String"/><Property Name="scope" Type="Edm.String"/><Property Name="baseUrl" Type="Edm.String"/><Property Name="chipCount" Type="Edm.String" MaxLength="4" sap:label="Counter"/><Property Name="outdated" Type="Edm.String"/><NavigationProperty Name="CatalogPage" Relationship="PAGE_BUILDER_PERS.Catalog_Page" FromRole="FromRole_Catalog_Page" ToRole="ToRole_Catalog_Page"/><NavigationProperty Name="Chips" Relationship="PAGE_BUILDER_PERS.Catalog_Chip" FromRole="FromRole_Catalog_Chip" ToRole="ToRole_Catalog_Chip"/></EntityType><EntityType Name="Page" sap:content-version="1"><Key><PropertyRef Name="id"/></Key><Property Name="id" Type="Edm.String" Nullable="false"/><Property Name="title" Type="Edm.String"/><Property Name="catalogId" Type="Edm.String"/><Property Name="layout" Type="Edm.String"/><Property Name="originalLanguage" Type="Edm.String"/><Property Name="isCatalogPage" Type="Edm.String" MaxLength="1"/><Property Name="chipInstanceCount" Type="Edm.String" MaxLength="4" sap:label="Counter"/><Property Name="isPersLocked" Type="Edm.String" MaxLength="1"/><Property Name="isReadOnly" Type="Edm.String" MaxLength="1"/><Property Name="scope" Type="Edm.String" sap:updatable="false"/><Property Name="updated" Type="Edm.DateTime" Precision="7" m:FC_TargetPath="SyndicationUpdated" m:FC_KeepInContent="false" sap:label="Time Stamp" sap:updatable="false"/><Property Name="outdated" Type="Edm.String" MaxLength="1" sap:updatable="false"/><NavigationProperty Name="Catalog" Relationship="PAGE_BUILDER_PERS.Page_Catalog" FromRole="FromRole_Page_Catalog" ToRole="ToRole_Page_Catalog"/><NavigationProperty Name="allCatalogs" Relationship="PAGE_BUILDER_PERS.Page_Catalogs" FromRole="FromRole_Page_Catalogs" ToRole="ToRole_Page_Catalogs"/><NavigationProperty Name="PageChipInstances" Relationship="PAGE_BUILDER_PERS.Page_PageChipInstance" FromRole="FromRole_Page_PageChipInstance" ToRole="ToRole_Page_PageChipInstance"/><NavigationProperty Name="Bags" Relationship="PAGE_BUILDER_PERS.Page_Bags" FromRole="FromRole_Page_Bags" ToRole="ToRole_Page_Bags"/></EntityType><EntityType Name="PageChipInstance" sap:content-version="1"><Key><PropertyRef Name="pageId"/><PropertyRef Name="instanceId"/></Key><Property Name="pageId" Type="Edm.String" Nullable="false"/><Property Name="instanceId" Type="Edm.String" Nullable="false"/><Property Name="chipId" Type="Edm.String"/><Property Name="title" Type="Edm.String"/><Property Name="configuration" Type="Edm.String"/><Property Name="layoutData" Type="Edm.String"/><Property Name="remoteCatalogId" Type="Edm.String"/><Property Name="referencePageId" Type="Edm.String" sap:updatable="false"/><Property Name="referenceChipInstanceId" Type="Edm.String" sap:updatable="false"/><Property Name="isReadOnly" Type="Edm.String" MaxLength="1"/><Property Name="scope" Type="Edm.String" sap:updatable="false"/><Property Name="updated" Type="Edm.DateTime" Precision="7" m:FC_TargetPath="SyndicationUpdated" m:FC_KeepInContent="false" sap:label="Time Stamp" sap:updatable="false"/><Property Name="outdated" Type="Edm.String" MaxLength="1" sap:updatable="false"/><NavigationProperty Name="Chip" Relationship="PAGE_BUILDER_PERS.PageChipInstance_Chip" FromRole="FromRole_PageChipInstance_Chip" ToRole="ToRole_PageChipInstance_Chip"/><NavigationProperty Name="ReferenceChip" Relationship="PAGE_BUILDER_PERS.PageChipInstance_Chip" FromRole="FromRole_PageChipInstance_Chip" ToRole="ToRole_PageChipInstance_Chip"/><NavigationProperty Name="RemoteCatalog" Relationship="PAGE_BUILDER_PERS.PageChipInstance_Catalog" FromRole="FromRole_PageChipInstance_Catalog" ToRole="ToRole_PageChipInstance_Catalog"/><NavigationProperty Name="ReferenceChipInstance" Relationship="PAGE_BUILDER_PERS.PageChipInstance_PageChipInstance" FromRole="FromRole_PageChipInstance_PageChipInstance" ToRole="ToRole_PageChipInstance_PageChipInstance"/><NavigationProperty Name="ChipInstanceBags" Relationship="PAGE_BUILDER_PERS.PageChipInstance_ChipInstanceBags" FromRole="FromRole_PageChipInstance_ChipInstanceBags" ToRole="ToRole_PageChipInstance_ChipInstanceBags"/></EntityType><EntityType Name="Chip" sap:content-version="1"><Key><PropertyRef Name="id"/></Key><Property Name="id" Type="Edm.String" Nullable="false"/><Property Name="title" Type="Edm.String"/><Property Name="description" Type="Edm.String"/><Property Name="configuration" Type="Edm.String"/><Property Name="url" Type="Edm.String"/><Property Name="baseChipId" Type="Edm.String"/><Property Name="catalogId" Type="Edm.String"/><Property Name="catalogPageChipInstanceId" Type="Edm.String"/><Property Name="referenceChipId" Type="Edm.String"/><Property Name="isReadOnly" Type="Edm.String" MaxLength="1"/><NavigationProperty Name="Catalog" Relationship="PAGE_BUILDER_PERS.Chip_Catalog" FromRole="FromRole_Chip_Catalog" ToRole="ToRole_Chip_Catalog"/><NavigationProperty Name="ReferenceChip" Relationship="PAGE_BUILDER_PERS.Chip_Chip" FromRole="FromRole_Chip_Chip" ToRole="ToRole_Chip_Chip"/><NavigationProperty Name="ChipBags" Relationship="PAGE_BUILDER_PERS.Chip_ChipBags" FromRole="FromRole_Chip_ChipBags" ToRole="ToRole_Chip_ChipBags"/><NavigationProperty Name="CatalogPageChipInstance" Relationship="PAGE_BUILDER_PERS.Chip_PageChipInstance" FromRole="FromRole_Chip_PageChipInstance" ToRole="ToRole_Chip_PageChipInstance"/></EntityType><EntityType Name="Bag" sap:content-version="1"><Key><PropertyRef Name="pageId"/><PropertyRef Name="id"/></Key><Property Name="pageId" Type="Edm.String" Nullable="false"/><Property Name="id" Type="Edm.String" Nullable="false"/><Property Name="scope" Type="Edm.String" sap:updatable="false"/><NavigationProperty Name="Properties" Relationship="PAGE_BUILDER_PERS.Bag_Property" FromRole="FromRole_Bag_Property" ToRole="ToRole_Bag_Property"/></EntityType><EntityType Name="Property" sap:content-version="1"><Key><PropertyRef Name="pageId"/><PropertyRef Name="bagId"/><PropertyRef Name="name"/></Key><Property Name="pageId" Type="Edm.String" Nullable="false"/><Property Name="bagId" Type="Edm.String" Nullable="false"/><Property Name="name" Type="Edm.String" Nullable="false"/><Property Name="value" Type="Edm.String"/><Property Name="translatable" Type="Edm.String" MaxLength="1"/></EntityType><EntityType Name="ChipBag" sap:content-version="1"><Key><PropertyRef Name="chipId"/><PropertyRef Name="id"/></Key><Property Name="chipId" Type="Edm.String" Nullable="false"/><Property Name="id" Type="Edm.String" Nullable="false"/><NavigationProperty Name="ChipProperties" Relationship="PAGE_BUILDER_PERS.ChipBag_ChipProperties" FromRole="FromRole_ChipBag_ChipProperties" ToRole="ToRole_ChipBag_ChipProperties"/></EntityType><EntityType Name="ChipProperty" sap:content-version="1"><Key><PropertyRef Name="chipId"/><PropertyRef Name="bagId"/><PropertyRef Name="name"/></Key><Property Name="chipId" Type="Edm.String" Nullable="false"/><Property Name="bagId" Type="Edm.String" Nullable="false"/><Property Name="name" Type="Edm.String" Nullable="false"/><Property Name="value" Type="Edm.String"/><Property Name="translatable" Type="Edm.String" MaxLength="1"/></EntityType><EntityType Name="ChipInstanceBag" sap:content-version="1"><Key><PropertyRef Name="pageId"/><PropertyRef Name="instanceId"/><PropertyRef Name="id"/></Key><Property Name="pageId" Type="Edm.String" Nullable="false"/><Property Name="instanceId" Type="Edm.String" Nullable="false"/><Property Name="id" Type="Edm.String" Nullable="false"/><Property Name="scope" Type="Edm.String" sap:updatable="false"/><NavigationProperty Name="ChipInstanceProperties" Relationship="PAGE_BUILDER_PERS.ChipInstanceBag_ChipInstanceProperty" FromRole="FromRole_ChipInstanceBag_ChipInstanceProperty" ToRole="ToRole_ChipInstanceBag_ChipInstanceProperty"/></EntityType><EntityType Name="ChipInstanceProperty" sap:content-version="1"><Key><PropertyRef Name="pageId"/><PropertyRef Name="instanceId"/><PropertyRef Name="bagId"/><PropertyRef Name="name"/></Key><Property Name="pageId" Type="Edm.String" Nullable="false"/><Property Name="instanceId" Type="Edm.String" Nullable="false"/><Property Name="bagId" Type="Edm.String" Nullable="false"/><Property Name="name" Type="Edm.String" Nullable="false"/><Property Name="value" Type="Edm.String"/><Property Name="translatable" Type="Edm.String" MaxLength="1"/></EntityType><EntityType Name="PageSet" sap:content-version="1"><Key><PropertyRef Name="id"/></Key><Property Name="id" Type="Edm.String" Nullable="false"/><Property Name="configuration" Type="Edm.String"/><NavigationProperty Name="Pages" Relationship="PAGE_BUILDER_PERS.PageSet_Pages" FromRole="FromRole_PageSet_Pages" ToRole="ToRole_PageSet_Pages"/><NavigationProperty Name="MyPages" Relationship="PAGE_BUILDER_PERS.PageSet_Pages" FromRole="FromRole_PageSet_Pages" ToRole="ToRole_PageSet_Pages"/><NavigationProperty Name="AssignedPages" Relationship="PAGE_BUILDER_PERS.PageSet_Pages" FromRole="FromRole_PageSet_Pages" ToRole="ToRole_PageSet_Pages"/><NavigationProperty Name="DefaultPage" Relationship="PAGE_BUILDER_PERS.PageSet_Page" FromRole="FromRole_PageSet_Page" ToRole="ToRole_PageSet_Page"/></EntityType><Association Name="PageSet_Pages" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.PageSet" Multiplicity="0..1" Role="FromRole_PageSet_Pages"/><End Type="PAGE_BUILDER_PERS.Page" Multiplicity="*" Role="ToRole_PageSet_Pages"/></Association><Association Name="PageSet_Page" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.PageSet" Multiplicity="1" Role="FromRole_PageSet_Page"/><End Type="PAGE_BUILDER_PERS.Page" Multiplicity="1" Role="ToRole_PageSet_Page"/></Association><Association Name="Catalog_Page" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Catalog" Multiplicity="1" Role="FromRole_Catalog_Page"/><End Type="PAGE_BUILDER_PERS.Page" Multiplicity="0..1" Role="ToRole_Catalog_Page"/></Association><Association Name="Catalog_Chip" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Catalog" Multiplicity="*" Role="FromRole_Catalog_Chip"/><End Type="PAGE_BUILDER_PERS.Chip" Multiplicity="*" Role="ToRole_Catalog_Chip"/></Association><Association Name="PageChipInstance_Chip" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.PageChipInstance" Multiplicity="*" Role="FromRole_PageChipInstance_Chip"/><End Type="PAGE_BUILDER_PERS.Chip" Multiplicity="0..1" Role="ToRole_PageChipInstance_Chip"/></Association><Association Name="PageChipInstance_Catalog" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.PageChipInstance" Multiplicity="*" Role="FromRole_PageChipInstance_Catalog"/><End Type="PAGE_BUILDER_PERS.Catalog" Multiplicity="0..1" Role="ToRole_PageChipInstance_Catalog"/></Association><Association Name="PageChipInstance_PageChipInstance" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.PageChipInstance" Multiplicity="1" Role="FromRole_PageChipInstance_PageChipInstance"/><End Type="PAGE_BUILDER_PERS.PageChipInstance" Multiplicity="0..1" Role="ToRole_PageChipInstance_PageChipInstance"/></Association><Association Name="PageChipInstance_ChipInstanceBags" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.PageChipInstance" Multiplicity="1" Role="FromRole_PageChipInstance_ChipInstanceBags"/><End Type="PAGE_BUILDER_PERS.ChipInstanceBag" Multiplicity="*" Role="ToRole_PageChipInstance_ChipInstanceBags"/></Association><Association Name="Chip_Catalog" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Chip" Multiplicity="*" Role="FromRole_Chip_Catalog"/><End Type="PAGE_BUILDER_PERS.Catalog" Multiplicity="1" Role="ToRole_Chip_Catalog"/></Association><Association Name="Chip_Chip" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Chip" Multiplicity="1" Role="FromRole_Chip_Chip"/><End Type="PAGE_BUILDER_PERS.Chip" Multiplicity="0..1" Role="ToRole_Chip_Chip"/></Association><Association Name="Chip_ChipBags" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Chip" Multiplicity="1" Role="FromRole_Chip_ChipBags"/><End Type="PAGE_BUILDER_PERS.ChipBag" Multiplicity="*" Role="ToRole_Chip_ChipBags"/></Association><Association Name="Chip_PageChipInstance" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Chip" Multiplicity="1" Role="FromRole_Chip_PageChipInstance"/><End Type="PAGE_BUILDER_PERS.PageChipInstance" Multiplicity="0..1" Role="ToRole_Chip_PageChipInstance"/></Association><Association Name="ChipBag_ChipProperties" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.ChipBag" Multiplicity="1" Role="FromRole_ChipBag_ChipProperties"/><End Type="PAGE_BUILDER_PERS.ChipProperty" Multiplicity="*" Role="ToRole_ChipBag_ChipProperties"/></Association><Association Name="Page_Catalogs" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Page" Multiplicity="*" Role="FromRole_Page_Catalogs"/><End Type="PAGE_BUILDER_PERS.Catalog" Multiplicity="*" Role="ToRole_Page_Catalogs"/></Association><Association Name="Page_PageChipInstance" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Page" Multiplicity="1" Role="FromRole_Page_PageChipInstance"/><End Type="PAGE_BUILDER_PERS.PageChipInstance" Multiplicity="*" Role="ToRole_Page_PageChipInstance"/></Association><Association Name="Page_Bags" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Page" Multiplicity="1" Role="FromRole_Page_Bags"/><End Type="PAGE_BUILDER_PERS.Bag" Multiplicity="*" Role="ToRole_Page_Bags"/></Association><Association Name="Page_Catalog" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Page" Multiplicity="*" Role="FromRole_Page_Catalog"/><End Type="PAGE_BUILDER_PERS.Catalog" Multiplicity="0..1" Role="ToRole_Page_Catalog"/></Association><Association Name="ChipInstanceBag_ChipInstanceProperty" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.ChipInstanceBag" Multiplicity="1" Role="FromRole_ChipInstanceBag_ChipInstanceProperty"/><End Type="PAGE_BUILDER_PERS.ChipInstanceProperty" Multiplicity="*" Role="ToRole_ChipInstanceBag_ChipInstanceProperty"/></Association><Association Name="Bag_Property" sap:content-version="1"><End Type="PAGE_BUILDER_PERS.Bag" Multiplicity="1" Role="FromRole_Bag_Property"/><End Type="PAGE_BUILDER_PERS.Property" Multiplicity="*" Role="ToRole_Bag_Property"/></Association><EntityContainer Name="PAGE_BUILDER_PERS_Entities" m:IsDefaultEntityContainer="true" sap:supported-formats="atom json xlsx"><EntitySet Name="Catalogs" EntityType="PAGE_BUILDER_PERS.Catalog" sap:content-version="1"/><EntitySet Name="Pages" EntityType="PAGE_BUILDER_PERS.Page" sap:content-version="1"/><EntitySet Name="PageChipInstances" EntityType="PAGE_BUILDER_PERS.PageChipInstance" sap:content-version="1"/><EntitySet Name="Chips" EntityType="PAGE_BUILDER_PERS.Chip" sap:content-version="1"/><EntitySet Name="Bags" EntityType="PAGE_BUILDER_PERS.Bag" sap:content-version="1"/><EntitySet Name="Properties" EntityType="PAGE_BUILDER_PERS.Property" sap:content-version="1"/><EntitySet Name="ChipBags" EntityType="PAGE_BUILDER_PERS.ChipBag" sap:content-version="1"/><EntitySet Name="ChipProperties" EntityType="PAGE_BUILDER_PERS.ChipProperty" sap:content-version="1"/><EntitySet Name="ChipInstanceBags" EntityType="PAGE_BUILDER_PERS.ChipInstanceBag" sap:content-version="1"/><EntitySet Name="ChipInstanceProperties" EntityType="PAGE_BUILDER_PERS.ChipInstanceProperty" sap:content-version="1"/><EntitySet Name="PageSets" EntityType="PAGE_BUILDER_PERS.PageSet" sap:content-version="1"/><AssociationSet Name="Page_Catalog_AssocSet" Association="PAGE_BUILDER_PERS.Page_Catalog" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Pages" Role="FromRole_Page_Catalog"/><End EntitySet="Catalogs" Role="ToRole_Page_Catalog"/></AssociationSet><AssociationSet Name="ChipBag_ChipProperties_AssocSet" Association="PAGE_BUILDER_PERS.ChipBag_ChipProperties" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="ChipBags" Role="FromRole_ChipBag_ChipProperties"/><End EntitySet="ChipProperties" Role="ToRole_ChipBag_ChipProperties"/></AssociationSet><AssociationSet Name="Bag_Property_AssocSet" Association="PAGE_BUILDER_PERS.Bag_Property" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Bags" Role="FromRole_Bag_Property"/><End EntitySet="Properties" Role="ToRole_Bag_Property"/></AssociationSet><AssociationSet Name="Catalog_Page_AssocSet" Association="PAGE_BUILDER_PERS.Catalog_Page" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Catalogs" Role="FromRole_Catalog_Page"/><End EntitySet="Pages" Role="ToRole_Catalog_Page"/></AssociationSet><AssociationSet Name="PageChipInstance_Catalog_AssocSet" Association="PAGE_BUILDER_PERS.PageChipInstance_Catalog" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="PageChipInstances" Role="FromRole_PageChipInstance_Catalog"/><End EntitySet="Catalogs" Role="ToRole_PageChipInstance_Catalog"/></AssociationSet><AssociationSet Name="PageChipInstance_ChipInstanceBags_AssocS" Association="PAGE_BUILDER_PERS.PageChipInstance_ChipInstanceBags" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="PageChipInstances" Role="FromRole_PageChipInstance_ChipInstanceBags"/><End EntitySet="ChipInstanceBags" Role="ToRole_PageChipInstance_ChipInstanceBags"/></AssociationSet><AssociationSet Name="Chip_ChipBags_AssocSet" Association="PAGE_BUILDER_PERS.Chip_ChipBags" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Chips" Role="FromRole_Chip_ChipBags"/><End EntitySet="ChipBags" Role="ToRole_Chip_ChipBags"/></AssociationSet><AssociationSet Name="Page_Bags_AssocSet" Association="PAGE_BUILDER_PERS.Page_Bags" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Pages" Role="FromRole_Page_Bags"/><End EntitySet="Bags" Role="ToRole_Page_Bags"/></AssociationSet><AssociationSet Name="PageSet_Pages_AssocSet" Association="PAGE_BUILDER_PERS.PageSet_Pages" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="PageSets" Role="FromRole_PageSet_Pages"/><End EntitySet="Pages" Role="ToRole_PageSet_Pages"/></AssociationSet><AssociationSet Name="PageChipInstance_PageChipInstance_AssocS" Association="PAGE_BUILDER_PERS.PageChipInstance_PageChipInstance" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="PageChipInstances" Role="FromRole_PageChipInstance_PageChipInstance"/><End EntitySet="PageChipInstances" Role="ToRole_PageChipInstance_PageChipInstance"/></AssociationSet><AssociationSet Name="ChipInstanceBag_ChipInstanceProperty_Ass" Association="PAGE_BUILDER_PERS.ChipInstanceBag_ChipInstanceProperty" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="ChipInstanceBags" Role="FromRole_ChipInstanceBag_ChipInstanceProperty"/><End EntitySet="ChipInstanceProperties" Role="ToRole_ChipInstanceBag_ChipInstanceProperty"/></AssociationSet><AssociationSet Name="PageChipInstance_Chip_AssocSet" Association="PAGE_BUILDER_PERS.PageChipInstance_Chip" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="PageChipInstances" Role="FromRole_PageChipInstance_Chip"/><End EntitySet="Chips" Role="ToRole_PageChipInstance_Chip"/></AssociationSet><AssociationSet Name="Chip_Catalog_AssocSet" Association="PAGE_BUILDER_PERS.Chip_Catalog" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Chips" Role="FromRole_Chip_Catalog"/><End EntitySet="Catalogs" Role="ToRole_Chip_Catalog"/></AssociationSet><AssociationSet Name="Page_Catalogs_AssocSet" Association="PAGE_BUILDER_PERS.Page_Catalogs" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Pages" Role="FromRole_Page_Catalogs"/><End EntitySet="Catalogs" Role="ToRole_Page_Catalogs"/></AssociationSet><AssociationSet Name="Chip_PageChipInstance_AssocSet" Association="PAGE_BUILDER_PERS.Chip_PageChipInstance" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Chips" Role="FromRole_Chip_PageChipInstance"/><End EntitySet="PageChipInstances" Role="ToRole_Chip_PageChipInstance"/></AssociationSet><AssociationSet Name="Page_PageChipInstance_AssocSet" Association="PAGE_BUILDER_PERS.Page_PageChipInstance" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Pages" Role="FromRole_Page_PageChipInstance"/><End EntitySet="PageChipInstances" Role="ToRole_Page_PageChipInstance"/></AssociationSet><AssociationSet Name="Chip_Chip_AssocSet" Association="PAGE_BUILDER_PERS.Chip_Chip" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Chips" Role="FromRole_Chip_Chip"/><End EntitySet="Chips" Role="ToRole_Chip_Chip"/></AssociationSet><AssociationSet Name="PageSet_Page_AssocSet" Association="PAGE_BUILDER_PERS.PageSet_Page" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="PageSets" Role="FromRole_PageSet_Page"/><End EntitySet="Pages" Role="ToRole_PageSet_Page"/></AssociationSet><AssociationSet Name="Catalog_Chip_AssocSet" Association="PAGE_BUILDER_PERS.Catalog_Chip" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"><End EntitySet="Catalogs" Role="FromRole_Catalog_Chip"/><End EntitySet="Chips" Role="ToRole_Catalog_Chip"/></AssociationSet><FunctionImport Name="CloneCatalog" ReturnType="PAGE_BUILDER_PERS.Catalog" EntitySet="Catalogs" m:HttpMethod="POST"><Parameter Name="sourceId" Type="Edm.String" Mode="In"/><Parameter Name="targetId" Type="Edm.String" Mode="In"/><Parameter Name="title" Type="Edm.String" Mode="In" Nullable="true"/></FunctionImport><FunctionImport Name="ClonePageChipInstance" ReturnType="PAGE_BUILDER_PERS.PageChipInstance" EntitySet="PageChipInstances" m:HttpMethod="POST"><Parameter Name="sourcePageId" Type="Edm.String" Mode="In"/><Parameter Name="sourceChipInstanceId" Type="Edm.String" Mode="In"/><Parameter Name="targetPageId" Type="Edm.String" Mode="In"/></FunctionImport></EntityContainer><atom:link rel="self" href="https://5eced45e-1cd1-44b2-a4d4-1e06e2d768dc.abap.stagingaws.hanavlab.ondemand.com/sap/opu/odata/ui2/PAGE_BUILDER_PERS/$metadata" xmlns:atom="http://www.w3.org/2005/Atom"/><atom:link rel="latest-version" href="https://5eced45e-1cd1-44b2-a4d4-1e06e2d768dc.abap.stagingaws.hanavlab.ondemand.com/sap/opu/odata/ui2/PAGE_BUILDER_PERS/$metadata" xmlns:atom="http://www.w3.org/2005/Atom"/></Schema></edmx:DataServices></edmx:Edmx>',
	"com/catafdd/com/catalogapp/localService/mockserver.js":function(){sap.ui.define(["sap/ui/core/util/MockServer"],function(e){"use strict";var t,a="com.catafdd.com.catalogapp/",r=a+"localService/mockdata";return{init:function(){var n=jQuery.sap.getUriParameters(),o=jQuery.sap.getModulePath(r),s=jQuery.sap.getModulePath(a+"manifest",".json"),i="Catalogs",u=n.get("errorType"),p=u==="badRequest"?400:500,c=jQuery.sap.syncGetJSON(s).data,l=c["sap.app"].dataSources,f=l.mainService,d=jQuery.sap.getModulePath(a+f.settings.localUri.replace(".xml",""),".xml"),g=/.*\/$/.test(f.uri)?f.uri:f.uri+"/",m=f.settings.annotations;t=new e({rootUri:g});e.config({autoRespond:true,autoRespondAfter:n.get("serverDelay")||1e3});t.simulate(d,{sMockdataBaseUrl:o,bGenerateMissingMockData:true});var y=t.getRequests(),h=function(e,t,a){a.response=function(a){a.respond(e,{"Content-Type":"text/plain;charset=utf-8"},t)}};if(n.get("metadataError")){y.forEach(function(e){if(e.path.toString().indexOf("$metadata")>-1){h(500,"metadata Error",e)}})}if(u){y.forEach(function(e){if(e.path.toString().indexOf(i)>-1){h(p,u,e)}})}t.start();jQuery.sap.log.info("Running the app with mock data");if(m&&m.length>0){m.forEach(function(t){var r=l[t],n=r.uri,o=jQuery.sap.getModulePath(a+r.settings.localUri.replace(".xml",""),".xml");new e({rootUri:n,requests:[{method:"GET",path:new RegExp("([?#].*)?"),response:function(e){jQuery.sap.require("jquery.sap.xml");var t=jQuery.sap.sjax({url:o,dataType:"xml"}).data;e.respondXML(200,{},jQuery.sap.serializeXML(t));return true}}]}).start()})}},getMockServer:function(){return t}}});
},
	"com/catafdd/com/catalogapp/manifest.json":'{"_version":"1.8.0","sap.app":{"id":"com.catafdd.com.catalogapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","tags":{"keywords":[]},"ach":"","resources":"resources.json","dataSources":{"mainService":{"uri":"/sap/opu/odata/ui2/PAGE_BUILDER_PERS/","type":"OData","settings":{"annotations":["annotation"],"localUri":"localService/metadata.xml"}},"annotation":{"type":"ODataAnnotation","uri":"annotations/annotation.xml","settings":{"localUri":"annotations/annotation.xml"}}},"offline":false,"sourceTemplate":{"id":"ui5template.smartTemplate","version":"1.40.12"},"crossNavigation":{"inbounds":{"semocig1-actionfew":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"semocig1","action":"actionfew","title":"Catalog Application","subTitle":"","icon":""}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_hcb","sap_belize"]},"sap.ui5":{"resources":{"js":[],"css":[]},"dependencies":{"minUI5Version":"1.65.0","libs":{},"components":{}},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"i18n|sap.suite.ui.generic.template.ListReport|Catalogs":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/ListReport/Catalogs/i18n.properties"},"i18n|sap.suite.ui.generic.template.ObjectPage|Catalogs":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/ObjectPage/Catalogs/i18n.properties"},"":{"dataSource":"mainService","preload":true,"settings":{"defaultBindingMode":"TwoWay","defaultCountMode":"Inline","refreshAfterChange":false,"metadataUrlParams":{"sap-value-list":"none"}}}},"extends":{"extensions":{}},"contentDensities":{"compact":true,"cozy":true}},"sap.ui.generic.app":{"_version":"1.3.0","settings":{"forceGlobalRefresh":false,"objectPageHeaderType":"Dynamic","showDraftToggle":false},"pages":{"ListReport|Catalogs":{"entitySet":"Catalogs","component":{"name":"sap.suite.ui.generic.template.ListReport","list":true,"settings":{"condensedTableLayout":true,"smartVariantManagement":true,"enableTableFilterInPageVariant":true}},"pages":{"ObjectPage|Catalogs":{"entitySet":"Catalogs","component":{"name":"sap.suite.ui.generic.template.ObjectPage"}}}}}},"sap.platform.abap":{"uri":""},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.platform.hcp":{"uri":""}}'
}});
