type ArrayProps = {
  array: any;
};
function Main({ array }: ArrayProps) {
  return (
    <main>
      <div className="main">
        <div className="category">
          <ul className="category-list">
            <li>
              <button>Barchasi</button>
            </li>
            <li>
              <button>Barchasi</button>
            </li>
            <li>
              <button>Barchasi</button>
            </li>
            <li>
              <button>Barchasi</button>
            </li>
            <li>
              <button>Barchasi</button>
            </li>
            <li>
              <button>Barchasi</button>
            </li>
          </ul>
        </div>
        <div className="by-category-products">
          <div className="by-category-product">
            <img src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://www.creditasia.uz/upload/iblock/77f/290f6wq2p0z4clk03a2aldirgf0gsj0d/smartfon-xiaomi-redmi-note-11-6-128gb-graphite-gray.jpg" />
            <p className="title-product">Redmi note 11 pro global</p>
            <p>Narx: 300$</p>
          </div>
          <div className="by-category-product">
            <img src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://www.creditasia.uz/upload/iblock/77f/290f6wq2p0z4clk03a2aldirgf0gsj0d/smartfon-xiaomi-redmi-note-11-6-128gb-graphite-gray.jpg" />
            <p className="title-product">Redmi note 11 pro global</p>
            <p>Narx: 300$</p>
          </div>
          <div className="by-category-product">
            <img src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://www.creditasia.uz/upload/iblock/77f/290f6wq2p0z4clk03a2aldirgf0gsj0d/smartfon-xiaomi-redmi-note-11-6-128gb-graphite-gray.jpg" />
            <p className="title-product">Redmi note 11 pro global</p>
            <p>Narx: 300$</p>
          </div>
          <div className="by-category-product">
            <img src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://www.creditasia.uz/upload/iblock/77f/290f6wq2p0z4clk03a2aldirgf0gsj0d/smartfon-xiaomi-redmi-note-11-6-128gb-graphite-gray.jpg" />
            <p className="title-product">Redmi note 11 pro global</p>
            <p>Narx: 300$</p>
          </div>
          <div className="by-category-product">
            <img src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://www.creditasia.uz/upload/iblock/77f/290f6wq2p0z4clk03a2aldirgf0gsj0d/smartfon-xiaomi-redmi-note-11-6-128gb-graphite-gray.jpg" />
            <p className="title-product">Redmi note 11 pro global</p>
            <p>Narx: 300$</p>
          </div>
          <div className="by-category-product">
            <img src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://www.creditasia.uz/upload/iblock/77f/290f6wq2p0z4clk03a2aldirgf0gsj0d/smartfon-xiaomi-redmi-note-11-6-128gb-graphite-gray.jpg" />
            <p className="title-product">Redmi note 11 pro global</p>
            <p>Narx: 300$</p>
          </div>
          <div className="by-category-product">
            <img src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://www.creditasia.uz/upload/iblock/77f/290f6wq2p0z4clk03a2aldirgf0gsj0d/smartfon-xiaomi-redmi-note-11-6-128gb-graphite-gray.jpg" />
            <p className="title-product">Redmi note 11 pro global</p>
            <p>Narx: 300$</p>
          </div>
          <div className="by-category-product">
            <img src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://www.creditasia.uz/upload/iblock/77f/290f6wq2p0z4clk03a2aldirgf0gsj0d/smartfon-xiaomi-redmi-note-11-6-128gb-graphite-gray.jpg" />
            <p className="title-product">Redmi note 11 pro global</p>
            <p>Narx: 300$</p>
          </div>
          {/* {array &&
            array.data.data.map((element: any, id: number) => {
              return (
                <div key={id} className="by-category-product">
                  <img src={element.image} />
                  <p className="title-product">{element.title}</p>
                </div>
              );
            })} */}
        </div>
      </div>
    </main>
  );
}
export default Main;
