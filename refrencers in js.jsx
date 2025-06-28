  HandelDelteByone(state,action){
            
       // state.Basekt.length> 0 ?  state.Basekt = state.Basekt.filter((item)=>item.nameCards != action.payload)  : null
        //  state.Basekt.splice(index, 1);
         let   res = state?.Basekt?.find((item)=>item.nameCards == action.payload)
         res.quanitity>0 ?  res.quanitity -- : 0;
            console.log(JSON.parse(JSON.stringify(res.quanitity)))
         }, 
        ✅ الخلاصة:
✅ find() بترجع reference للكائن داخل المصفوفة.

✅ أي تعديل على res هو تعديل مباشر على الكائن داخل basket.

❌ ما ترجع نسخة منفصلة.

