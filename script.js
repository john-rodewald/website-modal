
const onClickJoinGroup = () => {
    const iframe = document.querySelector('#gid-iframe');

    iframe.setAttribute('src', modal.getAttribute('data-src'));
};
