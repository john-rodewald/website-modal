const onClickJoinGroup = () => {
    const iframe = document.querySelector('#gid-iframe');

    iframe.setAttribute('src', iframe.getAttribute('data-src'));
};
