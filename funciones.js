var isDescriptionOpen = false;

    function showInfo(word) {
        if (!isDescriptionOpen) {
            var description = document.getElementById('info');
            var descriptionContent = document.getElementById('descriptionContent');
            var descriptionImage = document.getElementById('descriptionImage');

            // Puedes personalizar la descripción e imagen según la palabra seleccionada
            var wordInfo = getWordInfo(word);
            descriptionContent.innerHTML = wordInfo.description;
            descriptionImage.src = wordInfo.image;

            description.style.display = 'block';

            // Aplica efecto blur al resto de la página
            var containers = document.querySelectorAll('.container');
            containers.forEach(function(container) {
                container.classList.add('blur');
            });

            isDescriptionOpen = true;
        }
    }

    function closeInfo() {
        var description = document.getElementById('info');
        description.style.display = 'none';

        // Quita el efecto blur
        var containers = document.querySelectorAll('.container');
        containers.forEach(function(container) {
            container.classList.remove('blur');
        });

        isDescriptionOpen = false;
    }

    function getWordInfo(word) {
        // Puedes personalizar la información de cada palabra aquí
        var wordInfo = {};

        switch (word) {
            case 'Técnica':
                wordInfo.description = 'Un conjunto de métodos o procedimientos sistemáticos utilizados para llevar a cabo una tarea específica o alcanzar un objetivo determinado.';
                wordInfo.image = 'Técnica.jpg';
                break;
            case 'Higiene':
                wordInfo.description = 'El conjunto de prácticas y comportamientos destinados a mantener y mejorar la salud, así como a prevenir enfermedades, mediante la limpieza y el cuidado del cuerpo, la ropa y el entorno.';
                wordInfo.image = 'Higiene.jpg';
                break;
            case 'Salud':
                wordInfo.description = 'Un estado de completo bienestar físico, mental y social, y no solamente la ausencia de enfermedad o dolencia.';
                wordInfo.image = 'Salud.png';
                break;
            case 'Enfermedad':
                wordInfo.description = 'Una alteración o desviación del estado fisiológico en una o varias partes del cuerpo, que se manifiesta a través de síntomas y signos, y que puede ser causada por diversos factores, como agentes patógenos, genética, estilo de vida, entre otros.';
                wordInfo.image = 'Enfermedad.jpg';
                break;
            case 'Signos':
                wordInfo.description = 'Manifestaciones objetivas de una enfermedad o condición médica, observables y medibles por un profesional de la salud, como la fiebre, la presión arterial elevada, entre otros.';
                wordInfo.image = 'Signos.png';
                break;
            case 'Síntomas':
                wordInfo.description = 'Manifestaciones subjetivas de una enfermedad o condición médica, percibidas por el paciente y comunicadas al profesional de la salud, como dolor, fatiga, mareos, etc.';
                wordInfo.image = 'Sintomas.jpg';
                break;
            case 'Signo_vital':
                wordInfo.description = 'Indicadores objetivos y medibles de las funciones vitales básicas del cuerpo, como la frecuencia cardíaca, la frecuencia respiratoria, la temperatura corporal y la presión arterial.';
                wordInfo.image = 'Signo_vital.png';
                break;
            case 'Clínico':
                wordInfo.description = 'Relacionado con la práctica y el estudio de la medicina en el ámbito de la atención directa al paciente.';
                wordInfo.image = 'Clínico.png';
                break;
            case 'Muestreo':
                wordInfo.description = 'El proceso de seleccionar y recopilar una muestra representativa de una población más amplia con el propósito de realizar análisis o estudios.';
                wordInfo.image = 'Muestreo.jfif';
                break;
            case 'Pulso':
                wordInfo.description = 'La expansión rítmica de las arterias, producida por el bombeo de sangre desde el corazón. Se mide comúnmente en la muñeca, el cuello o la ingle.';
                wordInfo.image = 'Pulso.jpg';
                break;
            case 'Tejido':
                wordInfo.description = 'Un conjunto de células similares que trabajan juntas para realizar una función específica en el cuerpo.';
                wordInfo.image = 'Tejido.jpg';
                break;
            case 'Sangre':
                wordInfo.description = 'Un fluido vital en el cuerpo humano que transporta nutrientes, oxígeno, hormonas y desechos, además de desempeñar un papel crucial en la defensa inmunológica.';
                wordInfo.image = 'Sangre.jpg';
                break;
            case 'Presión_arterial':
                wordInfo.description = 'La fuerza ejercida por la sangre contra las paredes de las arterias, compuesta por dos mediciones: la presión sistólica (durante la contracción del corazón) y la presión diastólica (durante el reposo del corazón).';
                wordInfo.image = 'Presión_arterial.jpg';
                break;
            case 'Autoestima':
                wordInfo.description = 'La valoración y percepción positiva o negativa que una persona tiene de sí misma.';
                wordInfo.image = 'Autoestima.jfif';
                break;
            case 'Bacteria':
                wordInfo.description = 'Organismos unicelulares procariontes, algunos de los cuales pueden causar enfermedades, pero también desempeñan funciones importantes en la naturaleza y la digestión.';
                wordInfo.image = 'Bacteria.jpg';
                break;
            case 'Virus':
                wordInfo.description = 'Agentes infecciosos más pequeños que las bacterias, compuestos por material genético envuelto en una cápside proteica, y que requieren células hospedadoras para reproducirse.';
                wordInfo.image = 'Virus.jfif';
                break;
            // Puedes agregar más casos según sea necesario

            default:
                // Por defecto, utiliza una descripción genérica y una imagen predeterminada
                wordInfo.description = 'Descripción de la palabra';
                wordInfo.image = 'tu_imagen.jpg';
        }

        return wordInfo;
    }