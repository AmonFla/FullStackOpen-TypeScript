import { Router } from "express";
import  diagnoseService from '../services/diagnose';

const router = Router();

router.get('/',(_req,res)=>{
    res.send(diagnoseService.getDiagnoses());
});

export default router;