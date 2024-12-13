import style from "./CardComponent.module.css";

const isPublished = true;

export default function CardComponent({ obj }) {
    return (
        <div className="card my-4" id={obj.id}>
            {isPublished === obj.published ?
                <>
                    <img src={obj.image} className="card-img-top" alt={obj.title} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{obj.title}</h5>
                        <p className="card-text">{obj.content}</p>
                        <h5>Tags:</h5>
                        {obj.tags.map((tag, index) => {
                            return <p key={index} className={`fw-bold ${style[tag]}`}> {tag}</p>
                        })
                        }
                        <a href="#" className="btn btn-warning text-uppercase">Scopri di più</a>
                    </div>
                </>
                : ""
            }
        </div >
    );

}
