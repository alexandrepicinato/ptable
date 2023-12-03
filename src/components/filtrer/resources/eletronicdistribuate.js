export function distribuicaoatomica(numeroa){
    var list = [
      2,
      8,
      18,
      32,
      32,
      18,
      8]
      var sequence =[]
      var number =numeroa
  
  
      for (var i =0 ; i< list.length ; i ++){
        if (number- list[i] > 0 ){
          sequence.push(list[i])
          number = number- list[i]
        }
        else{
          if(number > 0){
            sequence.push(number)
            number = number- list[i]
          }
          else{
  
          }
        }
      }
      return sequence
  }

  export default function FamilyByPosition(posx){
    var metais =["3","11","19","37","55","87"]
    var metaisalcalinos =["4","12","20","38","56","88"]
    var semimetais =["5","14","32","33","51","52","84"]
    var gasesnobres =["2","10","18","36","54","86","118"]
    var halogenos =["9","17","35","53","85","117"]
    var naometais =["6","7","8","15","16","34"]
    var latanideos=["57","58","59","60","61","62","63","64","65","66","67","68","69","70","71"]
    var actinideos=["90","91","92","93","94","95","96","97","98","99","100","101","102","103"]
    var nofamily = ["1"]
    console.log(posx)
    if (metais.indexOf(posx) > -1) {
      return 'metal'
    }
    else if (metaisalcalinos.indexOf(posx) > -1) {
      return 'metaisalcalinos'
    }
    else if (semimetais.indexOf(posx) > -1) {
      return 'semimetais'
    }
    else if (halogenos.indexOf(posx) > -1) {
      return 'halogenos'
    }
    else if (naometais.indexOf(posx) > -1) {
      return 'naometais'
    }
    else if (gasesnobres.indexOf(posx) > -1) {
      return 'gasesnobres'
    }
    else if (latanideos.indexOf(posx) > -1) {
      return 'latanideos'
    }
    else if (actinideos.indexOf(posx) > -1) {
      return 'actinideos'
    }
    else if (nofamily.indexOf(posx) > -1) {
      return 'semfamilia'
    }
    else{
      return "metaldetransicao"
    }
  }