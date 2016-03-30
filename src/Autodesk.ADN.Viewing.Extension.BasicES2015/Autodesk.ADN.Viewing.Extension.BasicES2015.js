///////////////////////////////////////////////////////////////////////////////
// Basic viewer extension written in ES2015
// by Philippe Leefsma, July 2015
//
///////////////////////////////////////////////////////////////////////////////

class BasicES2015 extends Autodesk.Viewing.Extension{

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  constructor(viewer, options) {

    super(viewer, options);

    console.log(BasicES2015.ExtensionId + ' Constructor');

    this.viewer = viewer;
  }

  /////////////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////////////
  static get ExtensionId() {

    return 'Autodesk.ADN.Viewing.Extension.BasicES2015';
  }

  /////////////////////////////////////////////////////////////////
  // Load callback
  //
  /////////////////////////////////////////////////////////////////
  load() {

    alert("BasicES2015 Loaded");

    this.viewer.setBackgroundColor(
      255,0,0,
      255,255, 255);

    return true;
  }

  /////////////////////////////////////////////////////////////////
  // Unload callback
  //
  /////////////////////////////////////////////////////////////////
  unload() {

    this.viewer.setBackgroundColor(
      160, 176, 184,
      190,207,216);

    alert("BasicES2015 Unloaded");

    return true;
  }
}

Autodesk.Viewing.theExtensionManager.registerExtension(
  'Autodesk.ADN.Viewing.Extension.BasicES2015',
  BasicES2015);

