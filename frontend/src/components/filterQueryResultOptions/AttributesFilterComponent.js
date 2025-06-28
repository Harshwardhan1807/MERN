import { Form } from "react-bootstrap";

const AttributesFilterComponent = ({ attrsFilter, setAttrsFromFilter }) => {
  return (
    <>
      {attrsFilter && attrsFilter.length > 0 && attrsFilter.map((filter, idx) => (
        <div key={idx} className="mb-3">
          <Form.Label><b>{filter.key}</b></Form.Label>
            {filter.value.map((valueForKey, idx2) => (
              <Form.Check key={idx2} type="checkbox" label={valueForKey} onChange={(e) => 
                setAttrsFromFilter(filters => {
                  if(filters.length === 0)
                  {
                    return [{key: filter.key, values: [valueForKey]}];
                  }
                  let index = filters.findIndex((f) => f.key === filter.key);
                  if(index === -1){
                    return [...filters, {key: filter.key, values: [valueForKey]}];
                  }

                  if(e.target.checked){
                    filters[index].values.push(valueForKey);
                    let unique = [...new Set(filters[index].values)];
                    filters[index].values = unique;
                    return [...filters];
                  }

                  let valuesWithoutUnChecked = filters[index].values.filter((v) => v !== valueForKey);
                  filters[index].values = valuesWithoutUnChecked;
                  if(valuesWithoutUnChecked.length > 0){
                    return [...filters];
                  }
                  else{
                    let filtersWithoutKey = filters.filter((f) => f.key !== filter.key);
                    return [...filtersWithoutKey];
                  }

                })} />
            ))}
            
        </div>
      ))}
    </>
  );
};

export default AttributesFilterComponent;
