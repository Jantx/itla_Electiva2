function getSkills() {
    const data = [];
    const dataContainer = document.querySelectorAll('#content2 .form-row')

    dataContainer.forEach(container => {
        const info = container.querySelector('#skill').value;
        const valoracion = container.querySelector('#valoracion_skill').value;
        data.push({info,valoracion});
    });
    console.log(data)
    return data;
  
}

function getSoftware() {
    const data = [];
    const dataContainer = document.querySelectorAll('#content3 .form-row')

    dataContainer.forEach(container => {
        const info = container.querySelector('#software').value;
        const valoracion = container.querySelector('#valoracion_software').value;
        data.push({info,valoracion});
    });
    console.log(data)
    return data;
  
}

function getIdioma() {
    const data = [];
    const dataContainer = document.querySelectorAll('#content4 .form-row')

    dataContainer.forEach(container => {
        const info = container.querySelector('#idioma').value;
        const valoracion = container.querySelector('#valoracion_idioma').value;
        data.push({info,valoracion});
    });
    console.log(data)
    return data;
  
}

function getExperiencia() {
    const data = [];
    const dataContainer = document.querySelectorAll('#content6 .form-row')

    dataContainer.forEach(container => {
        const info = container.querySelector('#experiencia_laboral').value;
        const inicio = container.querySelector('#inicio_experiencia').value;
        const fin = container.querySelector('#fin_experiencia').value;
        data.push({info,inicio,fin});
    });
    console.log(data)
    return data;
}


function getEducacion() {
    const data = [];
    const dataContainer = document.querySelectorAll('#content7 .form-row')

    dataContainer.forEach(container => {
        const info = container.querySelector('#educacion').value;
        const inicio = container.querySelector('#inicio_educacion').value;
        const fin = container.querySelector('#fin_educacion').value;
        data.push({info,inicio,fin});
    });
    console.log(data)
    return data;
}

function getCertificacion() {
    const data = [];
    const dataContainer = document.querySelectorAll('#content8 .form-row')

    dataContainer.forEach(container => {
        const info = container.querySelector('#certificacion').value;
        const inicio = container.querySelector('#inicio_certificacion').value;
        const fin = container.querySelector('#fin_certificacion').value;
        data.push({info,inicio,fin});
    });
    console.log(data)
    return data;
}


function crear(){
    const infoSkill= getSkills();
    const infoSoftware= getSoftware();
    const infoIdioma= getIdioma();
    const infoExperiencia = getExperiencia();
    const infoEducacion = getEducacion();
    const infoCertificacion = getCertificacion();


     //information box
     const newCurriculum = document.createElement("div")
     newCurriculum.className = "form-row";
     newCurriculum.id= "curriculum";

     const seccion1= document.createElement("div")
     seccion1.className = "form-col";
     seccion1.id= "seccion1";


     const name = document.createElement('h1');
     name.className = "name";
     name.id = "name"
     name.textContent = document.querySelector('#nombre').value;

     const title = document.createElement('h2');
     title.className = "title";
     title.id = "title"
     title.textContent = document.querySelector('#titulo').value;
  //information box

 // personal information
     const infoPerso = document.createElement("div")
     infoPerso.className = "form-group col infoBox";
     infoPerso.id= "infoPerso";

     const headerInfo = document.createElement('h5');
     headerInfo.className = "headerInfo";
     headerInfo.textContent = "Informacion Personal"

     const boxInfo = document.createElement("div")
     boxInfo.className = "boxInfo";
     
     const email = document.createElement("p")
     email.className = "info";
     email.textContent = "Email: " + document.querySelector('#correo').value;

     const telefono = document.createElement("p")
     telefono.className = "info";
     telefono.textContent = "Telefono: " + document.querySelector('#telefono').value;

     const Nacimiento = document.createElement("p")
     Nacimiento.className = "info";
     Nacimiento.textContent = "Nacimiento: " + document.querySelector('#fecha_nacimiento').value;

     const linked = document.createElement("p")
     linked .className = "info";
     linked .textContent = "Linkedln: " + document.querySelector('#linkedin').value;

 
     seccion1.appendChild(name);
     seccion1.appendChild(title);
     seccion1.appendChild(infoPerso)
     
     infoPerso.appendChild(headerInfo);
     infoPerso.appendChild(boxInfo);

     boxInfo.appendChild(email)
     boxInfo.appendChild(telefono)
     boxInfo.appendChild(Nacimiento)
     boxInfo.appendChild(linked)

 // personal information

 //skillbox
     const skillBox = document.createElement("div");
     skillBox.className = "form-group col infoBox";
     skillBox.id = "habilidadesInfo";

     const skillHeaderInfo = document.createElement("h5");
     skillHeaderInfo.className = "headerInfo";
     skillHeaderInfo.textContent = "Habilidades";
     
     const skillBoxInfo = document.createElement("div");
     skillBoxInfo.className = "boxInfo"

     for (let i = 0; i < infoSkill.length; i++) {
         const info = infoSkill[i].info;
         const valo = infoSkill[i].valoracion;

         const skill = document.createElement("p");
         skill.className = "info"
         skill.textContent = `${info} (${valo}/5)`

         skillBoxInfo.appendChild(skill);
     }

     seccion1.appendChild(skillBox);
     skillBox.appendChild(skillHeaderInfo);
     skillBox.appendChild(skillBoxInfo);

     newCurriculum.appendChild(seccion1);
     document.body.appendChild(newCurriculum);
 //skillbox

 //softwarebox
     const softwareBox = document.createElement("div");
     softwareBox.className = "form-group col infoBox";
     softwareBox.id = "softwareInfo";

     const softwareHeaderInfo = document.createElement("h5");
     softwareHeaderInfo.className = "headerInfo";
     softwareHeaderInfo.textContent = "Software";
     
     const softwareBoxInfo = document.createElement("div");
     softwareBoxInfo.className = "boxInfo"

     for (let i = 0; i < infoSoftware.length; i++) {
         const info = infoSoftware[i].info;
         const valo = infoSoftware[i].valoracion;

         const software = document.createElement("p");
         software.className = "info"
         software.textContent = `${info} (${valo}/5)`

         softwareBoxInfo.appendChild(software);
     }

     seccion1.appendChild(softwareBox);
     softwareBox.appendChild(softwareHeaderInfo);
     softwareBox.appendChild(softwareBoxInfo);

     newCurriculum.appendChild(seccion1);
     document.body.appendChild(newCurriculum);
 //softwarebox

 //idiomabox
     const idiomaBox = document.createElement("div");
     idiomaBox.className = "form-group col infoBox";
     idiomaBox.id = "idiomaInfo";

     const idiomaHeaderInfo = document.createElement("h5");
     idiomaHeaderInfo.className = "headerInfo";
     idiomaHeaderInfo.textContent = "Idiomas";
     
     const idiomaBoxInfo = document.createElement("div");
     idiomaBoxInfo.className = "boxInfo"

     for (let i = 0; i < infoIdioma.length; i++) {
         const info = infoIdioma[i].info;
         const valo = infoIdioma[i].valoracion;

         const idioma = document.createElement("p");
         idioma.className = "info"
         idioma.textContent = `${info} (${valo}/5)`

         idiomaBoxInfo.appendChild(idioma);
     }

     seccion1.appendChild(idiomaBox);
     idiomaBox.appendChild(idiomaHeaderInfo);
     idiomaBox.appendChild(idiomaBoxInfo);
 //idiomabox

 //seccion2

 const seccion2= document.createElement("div")
 seccion2.className = "form-group col";
 seccion2.id= "seccion2";

     //resumen
         const resumenBox= document.createElement("div")
         resumenBox.className = "form-group col infoBox2";
         resumenBox.id= "resumenInfo";

         const resumenTitle = document.createElement('h3');
         resumenTitle.className = "headerInfo2";
         resumenTitle.textContent = "Resumen Laboral"

         const resumenContent= document.createElement("div")
         
         const resumen = document.createElement("p")
         resumen.className = "info"
         resumen.textContent = document.querySelector("#resumen").value

         resumenContent.appendChild(resumen);
         resumenBox.appendChild(resumenTitle);
         resumenBox.appendChild(resumenContent);
         seccion2.appendChild(resumenBox)
     
     //experiencia
         const experienciaBox= document.createElement("div")
         experienciaBox.className = "form-group col infoBox2";
         experienciaBox.id= "experienciaInfo";

         const experienciaTitle = document.createElement('h3');
         experienciaTitle.className = "headerInfo2";
         experienciaTitle.textContent = "Experiencia Laboral"

         const experienciaContent= document.createElement("div")

         for (let i = 0; i < infoExperiencia.length; i++) {
             const info = infoExperiencia[i].info
             const inicio = infoExperiencia[i].inicio
             const fin = infoExperiencia[i].fin

             const experiencia = document.createElement("p")
             experiencia.className = "info"
             experiencia.textContent = `${info} (${inicio}/${fin})`
             experienciaContent.appendChild(experiencia);
         }

         experienciaBox.appendChild(experienciaTitle);
         experienciaBox.appendChild(experienciaContent);
         seccion2.appendChild(experienciaBox)
     
     //educacion
         const educacionBox= document.createElement("div")
         educacionBox.className = "form-group col infoBox2";
         educacionBox.id= "educacionInfo";

         const educacionTitle = document.createElement('h3');
         educacionTitle.className = "headerInfo2";
         educacionTitle.textContent = "Educacion"

         const educacionContent= document.createElement("div")

         for (let i = 0; i < infoEducacion.length; i++) {
             const info = infoEducacion[i].info
             const inicio = infoEducacion[i].inicio
             const fin = infoEducacion[i].fin

             const educacion = document.createElement("p")
             educacion.className = "info"
             educacion.textContent = `${info} (${inicio}/${fin})`
             educacionContent.appendChild(educacion);
         }

         educacionBox.appendChild(educacionTitle);
         educacionBox.appendChild(educacionContent);
         seccion2.appendChild(educacionBox)

     //certificacion
         const certificacionBox= document.createElement("div")
         certificacionBox.className = "form-group col infoBox2";
         certificacionBox.id= "certificacionInfo";

         const certificacionTitle = document.createElement('h3');
         certificacionTitle.className = "headerInfo2";
         certificacionTitle.textContent = "Certificaciones"

         const certificacionContent= document.createElement("div")

         for (let i = 0; i < infoCertificacion.length; i++) {
             const info = infoCertificacion[i].info
             const inicio = infoCertificacion[i].inicio
             const fin = infoCertificacion[i].fin

             const certificacion = document.createElement("p")
             certificacion.className = "info"
             certificacion.textContent = `${info} (${inicio}/${fin})`
             certificacionContent.appendChild(certificacion);
         }

         certificacionBox.appendChild(certificacionTitle);
         certificacionBox.appendChild(certificacionContent);
         seccion2.appendChild(certificacionBox)
 
 
 //seccion2

 newCurriculum.appendChild(seccion1);
 newCurriculum.appendChild(seccion2);

 document.body.appendChild(newCurriculum);
}

function validator() {
    const form = document.getElementById('vitaee');
    const inputs = form.querySelectorAll('.Input');

    const allFilled = Array.from(inputs).every(input => {
        if (!input.value.trim()) {
            console.log('vacio');
            return false;
        }
        return true;
    });

    if (allFilled) {
        console.log('Todos los campos están llenos.');
        return true;
    } else {
        console.log('Al menos un campo está vacío.');
        return false;
    }
}


function limpiar(){
    const form = document.getElementById('vitaee');
    const inputs = form.querySelectorAll('.Input');

    inputs.forEach(key => {
        key.value = "";
    })

}

function generarVitae() {
    const curriculum = document.getElementById('curriculum');
    if (!curriculum) {
        const camposRellenados = validator(); // Llama a la función validator
        if (camposRellenados) { 
            crear();
            limpiar();
        } else {
            alert("Faltan campos por rellenar");
        }
    } else {
        curriculum.remove();
        crear();
    }
}





