define(
	[
		'builder/controllers/fieldTypes',
		'builder/controllers/fieldTypeSections',
		'builder/controllers/drawerFieldTypeDrag',
		'builder/controllers/drawerSavedFields',
		'builder/controllers/drawerStagedFields',
		'builder/controllers/drawer',
		'builder/controllers/drawerData',
		'builder/controllers/drawerFilterFieldTypes',
		'builder/controllers/appDomain',
		'builder/controllers/appData',
		'builder/controllers/mainContent',
		'builder/controllers/fieldData'
	],
	function(
		FieldTypes,
		FieldTypeSections,
		FieldTypeDrag,
		SavedFields,
		StagedFields,
		Drawer,
		DrawerData,
		DrawerFilterFieldTypes,
		AppDomain,
		AppData,
		MainContent,
		FieldData
	) {
		var controller = Marionette.Object.extend( {
			initialize: function() {
				var fieldTypes = new FieldTypes();
				var fieldTypeSections = new FieldTypeSections();
				var fieldTypeDrag = new FieldTypeDrag();
				var savedFields = new SavedFields();
				var stagedFields = new StagedFields();
				var drawer = new Drawer();
				var drawerData = new DrawerData();
				var drawerFilterFieldTypes = new DrawerFilterFieldTypes();
				var appDomain = new AppDomain();
				var appData = new AppData();
				var mainContent = new MainContent();
				var fieldData = new FieldData();
			}
		});

		return controller;
} );