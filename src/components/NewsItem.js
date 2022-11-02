import React from "react";

const NewsItem =(props)=> {
  
    let { title, decsription, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div>
          <div
            className="card"
            
          >
              {/* <div style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0,
            }}>
            <span className=" badge rounded-pill bg-danger" >{source}</span></div> */}
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{decsription}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unkonwn" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
//Class based Component
// export class NewsItem extends Component {
//   render() {
//     let { title, decsription, imageUrl, newsUrl, author, date, source } =
//       this.props;
//     return (
//       <div className="my-3">
//         <div>
//           <div
//             className="card"
            
//           >
//               <div style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               position: "absolute",
//               right: 0,
//             }}>
//             <span className=" badge rounded-pill bg-danger" >{source}</span></div>
//           </div>
//           <img src={imageUrl} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">{decsription}</p>
//             <p className="card-text">
//               <small className="text-muted">
//                 By {!author ? "Unkonwn" : author} on{" "}
//                 {new Date(date).toGMTString()}
//               </small>
//             </p>
//             <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItem;
