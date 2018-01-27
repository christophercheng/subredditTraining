import React from 'react';

const InputSelector = (props) => {

  const {
    subcategories,
    handleChangeSubcategory,
    handleNewSubcategory, notifyFetchingData,
    handleFetchingError,
  } = props;
  const fetchData = url =>
    fetch(`https://www.reddit.com/r/${url}.json`);


  const handlePreExisting = (inputValue) => {
    if (subcategories.includes(inputValue)) {
      handleChangeSubcategory(inputValue);
      return true;
    }
    return false;
  };

  const submitHandler = (e) => {
    // do something later
    e.preventDefault();
    if (handlePreExisting(this.input.value)) { return; }
    this.button.disabled = true;

    notifyFetchingData(true);
    setTimeout(() => fetchData(this.input.value)
      .then((res) => {
        if (!res.ok) {
          throw Error(res);
        }
        return res.json();
      })
      .then((res) => {
        console.log(res.data.dist);
        notifyFetchingData(false);
        handleNewSubcategory(this.input.value, res.data.dist);
        this.button.disabled = false;
      })
      .catch((error) => {
        console.log(error);
        handleFetchingError(this.input.value, "No Data Available");
        notifyFetchingData(false);
        this.button.disabled = false;
      }), 500);
  };

  return (
    <div>
      <label htmlFor="selector">Fetch new subreddit: </label>
      <input ref={(el) => { this.input = el; }} id="selector" />
      <button ref={(el) => { this.button = el; }} onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default InputSelector;
