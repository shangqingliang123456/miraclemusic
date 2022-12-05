import { defineStore } from "pinia";


export const useMainStore= defineStore('main',{
   state:()=>{
    return{
        id:0,
        url:[],
        name:[],
        singer:[],
        playing:false,
        img:[],
        i:0,
        singword:[],
        time:[],
        index1:-1
    }
   },
   getters:{

   },
   actions:{
    seturl(url){
        this.url.push(url)
    },
    setname(name){
        this.name.push(name)
    },
    setplaying(){
        this.playing=true
    },
    stopplaying(){
        this.playing=false
    },
    clear(){
        this.url=[]
        this.name=[]
        this.img=[]
        this.i=0
    },
    setimg(url){
        this.img.push(url)
    },
    setsinger(singer){
        this.singer.push(singer)
    },
    setsingid(id){
        this.id=id
    },
    setsingword(word){
        this.singword.push(word)
    },
    settime(time){
        this.time.push(time)
    }
   }
})