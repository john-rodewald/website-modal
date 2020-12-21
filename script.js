const onClickJoinGroup = () => {
    const modal = document.querySelector('#gid-iframe');

    modal.setAttribute('src', modal.getAttribute('data-src'));
    console.log('aha!')
};
