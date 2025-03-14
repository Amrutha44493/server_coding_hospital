const express=require ("express");
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const dataset=[
    {
    id:1,
    name:'Baby Memorial',
    count:'100',
    location:'Calicut'
    },
    {
        id:2,
        name:'Starcare',
        count:'100',
        location:'Wayanad'
    },
    {
        id:3,
        name:'Mims',
        count:'500',
       location:'Malappuram'
}
]

//api methods
router.get('/',(req,res)=>{
    res.render("home",{
        dataset
    })
})
router.get('/addform',(req,res)=>{
    res.render("addform");
})
//post
router.post('/add',(req,res)=>{
   dataset.push(req.body);
     res.redirect('/');
})
//edit
router.get('/editform/:id',(req,res)=>{

    res.render('editform',{
        dataset,
        id:req.params.id
    })
})
router.post('/edit/:index',(req,res)=>{
    const id=req.params.index;
    dataset.splice(id-1,1,req.body);
  res.redirect('/');
})
//delete
router.get('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = dataset.findIndex(item => item.id === id);
    if (index !== -1) {
        dataset.splice(index, 1);
    }
    res.redirect('/');
});


module.exports=router;