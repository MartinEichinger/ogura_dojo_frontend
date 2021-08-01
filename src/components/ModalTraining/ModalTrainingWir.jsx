const ModalTrainingWir = ({ contentWir }) => {
  return (
    <div className="Wir d-none">
      <div className="modal-col">
        <div className="bg-training"></div>
        <h1 className="big">{contentWir.title}</h1>
        <div className="rect scroll_">
          <p className="mb-2">{contentWir.text}</p>
        </div>
        <div className="cards d-flex flex-row flex-wrap justify-content-around scroll_">
          {contentWir.tabs.map((item, i) => {
            return (
              <div className="body d-flex flex-column justify-content-between" key={i}>
                <div
                  className="image"
                  style={{
                    backgroundImage: item.img,
                    backgroundPosition: item.img_pos,
                  }}
                ></div>
                <div className="text d-flex flex-column align-items-center justify-content-around">
                  <h2>{item.head1}</h2>
                  <h5>{item.head2}</h5>
                  <p className="white text-center mb-2 small">{item.head3}</p>
                  <img src="email_24px_outlined.png" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalTrainingWir;
