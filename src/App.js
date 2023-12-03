import logo from './logo.svg';
import './App.css';
import PTable from './components/ptable/ptable';
import ItenData from './components/itenInfo';
import { usePage } from './hooks/page';
import TableFiltred from './components/filtrer/ptable';
import { useFiltrerData } from './hooks/filtrer';

function App() {
  const {Pageid, setPageid} = usePage()
  const {FiltrerDataid, setFiltrerDataid} = useFiltrerData()

  if(FiltrerDataid == 0){
    switch(Pageid){
      case 2:
        return(
          <ItenData />
        )
        break;
      default:
        return (
          <>
          <main className='App-header'>
            <PTable />
          </main>
          </>
        );
    }
  }
  else{
    switch(Pageid){
      case 2:
        return(
          <ItenData />
        )
        break;
      default:
        return (
          <>
          <main className='App-header'>
            <TableFiltred />
          </main>
          </>
        );
    }
  }
}

export default App;
