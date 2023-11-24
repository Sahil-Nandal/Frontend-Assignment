import React, { useState } from "react";
import "./App.css";

function App() {
  const [uiSchema, setUiSchema] = useState({});
  const [jsonInput, setJsonInput] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedTabs, setSelectedTabs] = useState([]);
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleCheckboxChange = () => {
    setIsDivVisible(!isDivVisible);
  };

  const handleJsonChange = (event) => {
    setJsonInput(event.target.value);
  };

  const handleRenderButtonClick = () => {
    try {
      const parsedSchema = JSON.parse(jsonInput);
      setUiSchema(parsedSchema);
      setIsFormVisible(true);
    } catch (error) {
      alert("Invalid JSON schema. Please check your input.");
    }
  };

  const renderForm = () => {
    return (
      <form>
        <h3>Create Pasta</h3>
        {uiSchema.map((param) => {
          if (param.uiType === "Group") {
            return (
              <div key={param.jsonKey}>
                <h3>{param.label}</h3>
                {param.subParameters.map((subParam) => (
                  <div key={subParam.jsonKey}>
                    {renderSubParameter(subParam)}
                  </div>
                ))}
              </div>
            );
          } else {
            return <div key={param.jsonKey}>{renderParameter(param)}</div>;
          }
        })}
        <div className="showContainer">
        <label>Show Advanced feilds: </label>
        <label class="switch">
          <input type="checkbox" onChange={handleCheckboxChange}/>
          <span class="slider"></span>
        </label>
        </div>
        <br></br>
        <button className="ui-btn" onClick={handleSubmitButtonClick}>
          Submit
        </button>
      </form>
    );
  };

  const renderParameter = (param) => {
    const { label, uiType, jsonKey, validate, description } = param;

    switch (uiType) {
      case "Input":
        
            return (
              <div className="inputField" id={label}>
                <label className="inputFieldSection">
                  {label}{" "}
                  {validate.required && <span style={{ color: "red" }}>*</span>}
                </label>
                <input
                  className="inputFieldSection inputFieldValue"
                  type="text"
                  name={jsonKey}
                  defaultValue={validate.defaultValue || ""}
                />
                <p>{description}</p>
              </div>)
        
          
      case "Select":
        switch (label) {
          case "Portion":
            return isDivVisible && (
              <div className="inputField">
                <label className="inputFieldSection">
                  {label}{" "}
                  {validate.required && <span style={{ color: "red" }}>*</span>}
                </label>
                <select
                  className="inputFieldSection inputFieldValue"
                  name={jsonKey}
                  defaultValue={validate.defaultValue || ""}
                >
                  {validate.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p>{description}</p>
              </div>
            );

          default:
            return (
              <div className="inputField">
                <label className="inputFieldSection">
                  {label}{" "}
                  {validate.required && <span style={{ color: "red" }}>*</span>}
                </label>
                <select
                  className="inputFieldSection inputFieldValue"
                  name={jsonKey}
                  defaultValue={validate.defaultValue || ""}
                >
                  {validate.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p>{description}</p>
              </div>
            );}
      case "Switch":
        return (
          <div>
            <label>{label}</label>
            <input
              type="checkbox"
              name={jsonKey}
              defaultChecked={validate.defaultValue || false}
            />
            <p>{description}</p>
          </div>
        );
      default:
        return null;
    }
  };

  const renderSubParameter = (subParam) => {
    const { label, uiType, jsonKey, validate, description, subParameters } =
      subParam;

    switch (uiType) {
      case "Ignore":
        return null; // Ignoring 'Ignore' type for simplicity
      default:
        return (
          <div>
            {renderParameter(subParam)}
            {subParameters &&
              subParameters.map((nestedParam) => (
                <div key={nestedParam.jsonKey}>
                  {renderSubParameter(nestedParam)}
                </div>
              ))}
          </div>
        );
    }
  };

  const handleTabSelect = (tabJsonKey) => {
    setSelectedTabs((prevTabs) => {
      if (prevTabs.includes(tabJsonKey)) {
        return prevTabs.filter((tab) => tab !== tabJsonKey);
      } else {
        return [...prevTabs, tabJsonKey];
      }
    });
  };

  const handleSubmitButtonClick = () => {
    // Prepare the JSON data to be sent to the backend
    const jsonDataToSend = {};

    // Include data only for selected tabs
    selectedTabs.forEach((selectedTab) => {
      const tabData = findTabData(uiSchema, selectedTab);
      if (tabData) {
        jsonDataToSend[selectedTab] = tabData;
      }
    });

    // Log or send jsonDataToSend to the backend
    console.log("JSON to be sent to the backend:", jsonDataToSend);
  };

  const findTabData = (schema, tabJsonKey) => {
    
    for (const param of schema) {
      if (param.jsonKey === tabJsonKey) {
        return param;
      } else if (param.subParameters) {
        const subTabData = findTabData(param.subParameters, tabJsonKey);
        if (subTabData) {
          return subTabData;
        }
      }
    }
    return null;
  };

  return (
    <div className="App">
      <div className="section">
        <h2>UI Schema Editor</h2>
        <textarea
          className="textArea"
          rows={30}
          cols={50}
          value={jsonInput}
          onChange={handleJsonChange}
          placeholder="Paste your JSON schema here"
        />
        <br></br>
        <br></br>

        <button className="ui-btn" onClick={handleRenderButtonClick}>
          Render Form...
        </button>
      </div>
      <div className="section formStyle">
        <h2>Pasta Form:</h2>
        {isFormVisible && renderForm()}
      </div>
    </div>
  );
}

export default App;
