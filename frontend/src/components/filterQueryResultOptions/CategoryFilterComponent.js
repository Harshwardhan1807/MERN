import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";

const CategoryFilterComponent = ({ setCategoriesFromFilter }) => {
  const { categories } = useSelector((state) => state.getCategories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const myRefs = useRef([]);

  const selectCategory = (e, category, idx) => {
    setCategoriesFromFilter((items) => {
      return { ...items, [category.name]: e.target.checked };
    });

    var selectedMainCategory = category.name.split("/")[0];
    var allCategories = myRefs.current.map((_, id) => {
      return { name: categories[id].name, idx: id };
    });
    var indexesOfMainCategory = allCategories.reduce((acc, item) => {
      var cat = item.name.split("/")[0];
      if (selectedMainCategory === cat) {
        acc.push(item.idx);
      }
      return acc;
    }, [])
    if (e.target.checked) {
      setSelectedCategories((old) => [...old, "cat"])
      myRefs.current.map((_, id) => {
        if (!indexesOfMainCategory.includes(id)) {
          myRefs.current[id].disabled = true;
          return "";
        }
      })
    } else {
      setSelectedCategories((old) => {
        var a = [...old]
        a.pop();
        if (a.length === 0) {
          window.location.href = "/product-list"
        }
        return a;
      })
      myRefs.current.map((_, id) => {
        if (allCategories.length === 1) {
          if (id !== idx) {
            myRefs.current[id].disabled = false;
          }
        } else if (selectedCategories.length === 1) {
          myRefs.current[id].disabled = false;
        }
        return "";
      })
    }
  };

  return (
    <>
      <span className="fw-bold">Category</span>
      <Form>
        {categories.map((category, idx) => (
          <div key={idx}>
            <Form.Check type="checkbox" id={`check-api2-${idx}`}>
              <Form.Check.Input
                ref={(el) => (myRefs.current[idx] = el)}
                type="checkbox"
                isValid
                onChange={(e) => selectCategory(e, category, idx)}
              />
              <Form.Check.Label style={{ cursor: "pointer" }}>
                {category.name}
              </Form.Check.Label>
            </Form.Check>
          </div>
        ))}
      </Form>
    </>
  );
};

export default CategoryFilterComponent;

