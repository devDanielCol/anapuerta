const FacebookShareButton = () => {
  return (
    <div>
      <iframe
        src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.construccionespeniel.com&layout&size&width=99&height=20&appId"
        width="99"
        height="20"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FacebookShareButton;
