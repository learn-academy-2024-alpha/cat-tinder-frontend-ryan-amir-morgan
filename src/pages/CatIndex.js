import React from "react"
import { Card, CardBody, CardTitle, Button } from "reactstrap"
import { Link } from "react-router-dom"

const CatIndex = ({ cats }) => {
  return (
    <div className="index-cont">
      <h1 className="index-title">Meet All the Cats</h1>
      <div className="cat-index-cards">
        {cats.map((cat) => {
          return (
            <Card
              style={{
                height: "34dvh",
                width: "15dvw",
                borderRadius: "5vh",
                border: "0.8dvh solid #fff",
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "0.75vw 1.5vh 1px rgba(0, 0, 0, 0.5)",
              }}
              key={cat.id}
            >
              <div className="profile-image-cont">
                <img
                  className="profile-image"
                  alt={`profile of ${cat.name}`}
                  src={cat.image}
                />
              </div>
              <CardBody
                style={{
                  textAlign: "center",
                  padding: "2vh",
                }}
              >
                <CardTitle tag="h5">{cat.name}</CardTitle>
                <Link to={`/cat-show/${cat.id}`}>
                  <Button
                    style={{
                      color: "white",
                      marginTop: "1.5vh",
                      fontSize: "1.75vh",
                      padding: "0.75vh",
                      borderRadius: "1vh",
                    }}
                  >
                    See More of Me
                  </Button>
                </Link>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex
