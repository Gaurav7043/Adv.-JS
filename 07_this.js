let obj = {
    name:"gaurav",
    // print:()=>{
    //     console.log("---->name---->",this.name)
    // }
    print:function (){
        console.log("---->name---->",this.name)
    }
}
obj.print()