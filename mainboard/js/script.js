function info(pkt, inform) {
    var punkt = document.getElementById(pkt);
    var information = document.getElementById(inform);

//alert(pkt)

//alert(container);
    punkt.addEventListener('mouseenter', function () {
        information.classList.remove('hide');
        information.classList.add('show');
    })
    punkt.addEventListener('mouseleave', function () {
        information.classList.add('hide')
        information.classList.remove('show');
    })
}

info('cpu', 'cpuinfo')
info('ram', 'raminfo')
info('pcie', 'pcieinfo')
info('m2', 'm2info')
info('sata', 'satainfo')
info( 'io', 'ioinfo')
info('lan', 'laninfo')
info('audio', 'audioinfo')
info('chip', 'chipinfo')
info('eps', 'epsinfo')
info('pin','pininfo')
