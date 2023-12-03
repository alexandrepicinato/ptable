


import React, { useState } from "react";
import { PTableContainer, PTableRow, PTable_Data, PTable_Element } from "./styled";
import dataJson from '../../data/elements.json'
import "./style.css"
import { useSelectedElement } from "../../hooks/selectedIten";
import { usePage } from "../../hooks/page";
import FamilyByPosition, { distribuicaoatomica } from "./resources/eletronicdistribuate";
import { useFiltrerData } from "../../hooks/filtrer";

export default function PTable(){
    const {Pageid, setPageid} = usePage()
    const {SelectedElementid, setSelectedElementid}= useSelectedElement();
    const {FiltrerDataid, setFiltrerDataid} = useFiltrerData()



    return(
        <>
        <PTableContainer style={{
            position:"absolute",
            flexDirection:"column",
        }}>
                <div>
                    <div style={{
                        width:"1468px"
                    }}>
                        <h1>Tabela Periodica Interativa</h1>

                        {
                            dataJson.rows.map(
                                (elementInfo)=>
                                <>
                                <>
                                    <PTable_Data>
                                        <PTableRow  id={"ROW"+elementInfo.row} data={"fuckfuck"+elementInfo.row} data-row={elementInfo.row}>
                                            {
                                                elementInfo.data.map(
                                                    (data) => (
                                                        <>
                                                        <PTable_Element className={FamilyByPosition(data.natomico)} data-element={data.nome} data-simbolo={data.simbolo} data-massaatomica={data.massaatomica} data-numeroatomico={data.natomico} data-fusao={data.fusao} data-ebulicao={data.ebulicao} data-densidade={data.densidade} data-distroeletronica={data.eletronicconfig} data-data-distribuicaoatomica={distribuicaoatomica(data.natomico)} data-familia={FamilyByPosition(data.natomico)} naa={data.natomico}>
                                                            <div>
                                                                <a className={"element__link"+" class"+data.familia} onClick={() => {setSelectedElementid(data); setPageid(2)}}>
                                                                <span class="element__mass">{data.massaatomica}</span>
                                                                <span class="element__num">{data.natomico}</span>
                                                                <span className={"element__sign "+FamilyByPosition(data.natomico)}>{
                                                                    data.simbolo
                                                                    //data.simbolo[0].toUpperCase+data.simbolo.substring()
                                                                }</span>
                                                                <span class="element__name">{data.nome}</span>
                                                                </a>
                                                            </div>
                                                        </PTable_Element>
                                                        </>
                                                    )
                                                )
                                            }
                                        </PTableRow>
                                    </PTable_Data>
                                </>
                                </>
                            )
                        }
                    </div>
                </div>
                <div>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        padding:"1%"
                    }}>
                        <div className="metal">
                            <a onClick={()=> setFiltrerDataid("metal")}>Metais</a>
                        </div>
                        <div className="metaisalcalinos">
                            <a onClick={()=> setFiltrerDataid("metaisalcalinos")}>Metais Alcalinos</a>
                        </div>

                        <div className="naometais">
                            <a onClick={()=> setFiltrerDataid("halogenos")}>Halogenos</a>
                        </div>
                        <div className="naometais">
                            <a onClick={()=> setFiltrerDataid("naometais")}>Nao Metais</a>
                        </div>
                        <div className="gasesnobres">
                            <a onClick={()=> setFiltrerDataid("gasesnobres")}>Gases Nobres</a>
                        </div>
                        <div className="actinideos">
                            <a onClick={()=> setFiltrerDataid("actinideos")}>Actinideos</a>
                        </div>
                        <div className="latanideos">
                            <a onClick={()=> setFiltrerDataid("latanideos")}>Latanideos</a>
                        </div>
                        <div className="semimetais">
                            <a onClick={()=> setFiltrerDataid("semimetais")}>Semimetais</a>
                        </div>
                        <div className="semimetais">
                            <a onClick={()=> setFiltrerDataid("0")}>Limpar Filtros</a>
                        </div>
                    </div>
                </div>
        </PTableContainer>
        </>
    )
}