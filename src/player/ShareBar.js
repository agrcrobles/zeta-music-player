import * as React from "react";
import styled from "styled-components";
import images from "../images";

const ShareActions = styled.div`
  display: inline-block;
  text-align: right;
  padding: 0 1rem;
`;
const ShareTwitter = styled.img`
  height: 1rem;
  padding: 0 0.5rem;
  cursor: pointer;
`;
const ShareFacebook = styled.img`
  height: 1rem;
  padding: 0 0.5rem;
`;
const ShareWhatsapp = styled.img`
  height: 1rem;
  padding: 0 0.5rem;
`;

const ShareBar = (props) => {
  const handleShareTwitter = (e) => {
    e.preventDefault();

    var url = "https://simple-music-player.now.sh/";
    var text = "Zeta Player";
    window.open(
      "http://twitter.com/share?url=" +
        encodeURIComponent(url) +
        "&text=" +
        encodeURIComponent(text),
      "",
      "width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
    );
  };

  return (
    <ShareActions>
      <ShareTwitter
        onClick={handleShareTwitter}
        role="button"
        alt="Share on Twitter"
        src={images.share_twitter}
      />
      <ShareFacebook
        disabled
        alt="Share on Facebook"
        src={images.share_facebook}
      />
      <ShareWhatsapp
        alt="Share on Whatsapp"
        disabled
        src={images.share_whatsapp}
      />
    </ShareActions>
  );
};

ShareBar.propTypes = {};

export default React.memo(ShareBar);
