import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ISuggestion from "../types/suggestion.type";
import SuggestionsService from "../services/suggestions.service";
import React, { useEffect } from "react";

export default function Index() {
  let [suggestions, setSuggestions] = React.useState<Array<ISuggestion>>([]),
    [recentSearch, setRecentSearch] = React.useState<Array<ISuggestion>>([]),
    [search, setSearch] = React.useState<string>(''),
    [latestPosition, setlatestPosition] = React.useState<number>(0);

  function updateDateSearch(display: string, suggestions: Array<ISuggestion>) {
    let containerResults: any = document.querySelector('.input-filter-result'),
      inputSearch: any = document.querySelector('.input-filter input');

    display === 'block'
      ? inputSearch.classList.add("input-filter-focus")
      : inputSearch.classList.remove("input-filter-focus")

    containerResults.style.display = display;
    setSuggestions(suggestions);
  }

  function ativeInputSearch() {
    let html: any = document.querySelector('html'),
      containerResults: any = document.querySelector('.input-filter-result');

    html.addEventListener('click', () => {
      containerResults.style.display = 'none';
    });
  }

  async function searchForWords(value: string) {
    setSearch(value);

    if (!value || value.length <= 0) {
      return updateDateSearch('none', []);
    }

    let suggestionsGET: any = await SuggestionsService.findSuggestion(value);

    suggestionsGET && suggestionsGET.data.length > 0
      ? updateDateSearch('block', suggestionsGET.data)
      : updateDateSearch('none', []);
  }

  function addHistory(value: string) {
    setSearch('');

    let newSuggestion: ISuggestion = { suggestion: value },
      history = recentSearch;

    if (latestPosition === 0 && recentSearch.length < 5) {
      return setRecentSearch(value => [...value, newSuggestion]);
    }

    history[latestPosition] = newSuggestion;

    latestPosition === 4
      ? setlatestPosition(0)
      : setlatestPosition(value => value + 1);

    setRecentSearch(history);
  }

  function addHistoryEnter(e: any) {
    if (e.key === 'Enter') addHistory(e.target.value);
  }

  useEffect(() => {
    ativeInputSearch();
  }, []);

  return (
    <div className="display">
      <div className="logo">
        <img src="img/logo.png" alt="Finder" />
      </div>
      <div className="input">
        <div className="input-filter">
          <FontAwesomeIcon size="1x" icon={faSearch} className="input-filter-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => searchForWords(e.target.value)}
            onKeyDown={addHistoryEnter}
          />
        </div>
        <div className="input-filter-result">
          <ul>
            {
              suggestions.map((result: ISuggestion, index: number) => {
                return <li onClick={() => addHistory(result.suggestion)} key={index}>{result.suggestion}</li>;
              })
            }
          </ul>
        </div>
      </div>
      <div className="recent-researches">
        <h3>Recently searched</h3>
        <ul>
          {
            recentSearch.map((result: ISuggestion, index: number) => {
              return <li key={index}> <FontAwesomeIcon icon={faSearch} className="recent-researches-icon" />{result.suggestion}</li>
            })
          }
        </ul>
      </div>
    </div>
  );
}
