import ProductCarouselComponent from "../../components/ProductCarouselComponent"
import CategoryCardComponent from "../../components/CategoryCardComponent";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from "react";
import MetaComponent from "../../components/MetaComponent";

const HomePageComponent = ({ categories, getBestSellers }) => {
    const [mainCategories, setMainCategories] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        getBestSellers()
        .then((bestSellers) => setBestSellers(bestSellers))
        .catch((err) => console.log(err.response.data.message ? err.response.data.message : err.response.data));
        setMainCategories((cat)=> categories.filter((c) => !c.name.includes("/")));
    }, [categories])

    return (
        <>
        <MetaComponent />
        <ProductCarouselComponent bestSellers={bestSellers}/>
        <Container>
        <Row xs={1} md={2} className='g-4 mt-5'>
            {mainCategories.map((category,idx)=> <CategoryCardComponent key={idx} category={category} idx={idx} />)}
        </Row>
        </Container>
        </>
    )
}
export default HomePageComponent;