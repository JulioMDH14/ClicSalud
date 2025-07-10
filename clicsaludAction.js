function mostrarInfo(sector) {
    document.getElementById('selector-sector').style.display = 'none';
    document.getElementById('info-publico').style.display = 'none';
    document.getElementById('info-privado').style.display = 'none';
    if (sector === 'publico') {
        document.getElementById('info-publico').style.display = 'block';
    } else {
        document.getElementById('info-privado').style.display = 'block';
    }
}

function mostrarInfo(sector) {
    const infoPublico = document.getElementById('info-publico');
    const infoPrivado = document.getElementById('info-privado');

    if (sector === 'publico') {
        infoPublico.style.display = 'grid';
        infoPrivado.style.display = 'none';
    } else if (sector === 'privado') {
        infoPublico.style.display = 'none';
        infoPrivado.style.display = 'block';
    }
}
