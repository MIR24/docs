var jsapp = {
  l:window.location,
  l_all:[],
  editlocs:["https://editors3.mir24.tv/pubs/news/create",
          "https://editors3.mir24.tv/pubs/video/create",
          "https://editors3.mir24.tv/pubs/galleries/create",
          "https://editors3.mir24.tv/pubs/articles/create",
          "https://editors3.mir24.tv/pubs/interactive/create",
          "https://editors3.mir24.tv/pubs/faces/create",
          "https://editors3.mir24.tv/pubs/press_release/create"],

    href:function(nloc){
      window.location.href=this.editlocs[nloc];
    },
  init:function(){
    this.l_all=[this.l.host, this.l.origin, this.l.pathname, this.l.href];
    return console.log(this)
  }
}
jsapp.init()
