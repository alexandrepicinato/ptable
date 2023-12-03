import React from "react";
import { useSelectedElement } from "../../hooks/selectedIten";
import { ContainerData, DescriptionContainer, ElementData, OrbitContainer } from "./style";
import FamilyByPosition, { distribuicaoatomica } from "../ptable/resources/eletronicdistribuate";
import { usePage } from "../../hooks/page";

export default function ItenData(){
    const {SelectedElementid, setSelectedElementid}= useSelectedElement();
    const {Pageid, setPageid} = usePage()

    var distroeletronica= [
        2,
        8,
        18,
        32,
        32,
        18,
        8,

    ]
    var eletronicconfig = (Load) =>{
        var elementNAtomic= Load.numeroatomico
        var indice =0
        var result = []
        for (var Counter = 0  ; Counter ==elementNAtomic ;  Counter++){
            indice++
        }
        console.log(indice);
        return indice
    }
    eletronicconfig(SelectedElementid)
    return(
        <>
        <div>
            <div>
                <div style={{
                    backgroundColor:"rgb(15,20,35)",
                    display:"flex",
                    justifyContent:"center",
                }}>
                    <OrbitContainer src={"./atomiccard.html?number="+SelectedElementid.numeroatomico+"&simbolo="+SelectedElementid.simbolo} width={"100%"} height={"100%"}></OrbitContainer>
                </div>
                <DescriptionContainer>
                        <div>
                            <ElementData>
                                <h3>Nome</h3>
                                <p>{SelectedElementid.nome}</p>
                            </ElementData>
                            <ElementData>
                                <h3>Numero Atomico</h3>
                                <p>{SelectedElementid.numeroatomico}</p>
                            </ElementData>
                            <ElementData>
                                <h3>Dencidade</h3>
                                <p>{SelectedElementid.densidade}</p>
                            </ElementData>
                            <ElementData>
                                <h3>Distribuicao Eletronica</h3>
                                <p>{SelectedElementid.eletronicconfig2}</p>
                                <p>{distribuicaoatomica(SelectedElementid.numeroatomico)}</p>

                            </ElementData>
                            <ElementData>
                                <h3>Temperaturas </h3>
                                <p>Ebulicao {SelectedElementid.ebulicao}°C</p>
                                <p>Fusao {SelectedElementid.fusao}°C</p>

                            </ElementData>
                            <ElementData>
                                <h3>Massa Atomica </h3>
                                <p>{SelectedElementid.massaatomica}</p>

                            </ElementData>
                            <ElementData>
                                <h3>Estado a 25°C</h3>
                                <p>{SelectedElementid.phase}</p>

                            </ElementData>
                            <ElementData>
                                <h3>Coeficiente de Energia Molar </h3>
                                <p>{SelectedElementid.energiamolarcoef}</p>

                            </ElementData>

                            <ElementData>
                                <h3>Coeficiente de Energia Ionizante </h3>
                                <p>{SelectedElementid.coefenergiaionizante}</p>

                            </ElementData>
                            <ElementData>
                                <h3>Dencidade do Elemento </h3>
                                <p>{SelectedElementid.densidade}</p>

                            </ElementData>
                            <ElementData>
                                <h3>Coeficiente de Eletronegatividade </h3>
                                <p>{SelectedElementid.eletronegatividadecf}</p>

                            </ElementData>
                            <ElementData>
                                <h3>Descoberto por  </h3>
                                <p>{SelectedElementid.descobertopor}</p>

                            </ElementData>
                            <ElementData>
                                <h4>Categoria</h4>
                                <p>{SelectedElementid.category}</p>
                            </ElementData>
                            <ElementData>
                                <h4>Familia</h4>
                                <p>{FamilyByPosition(SelectedElementid.natomico)}</p>
                            </ElementData>
                            <ElementData>
                                <h4>Fonte das Informacoes </h4>
                                <p>{FamilyByPosition(SelectedElementid.source)}</p>
                                <p>Dados Obtidos em Agosto de 2019</p>

                            </ElementData>
                        </div>

                    </DescriptionContainer>
                    <ElementData>
                        <button onClick={() => {setPageid(0)}}>Voltar Para Tabela</button>
                    </ElementData>
            </div>
        </div>
        </>
    )
}