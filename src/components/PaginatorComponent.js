import React from "react";

function PaginatorComponent({ onPrevPage, currentPage, onNextPage }) {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination m-0 justify-content-evenly align-items-center">
                <li className="page-item">
                    <button className="btn btn-light" type="button" onClick={() => onPrevPage()} aria-label="Previous">
                        <span style={{ fontSize: '1.6em' }} aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li className="page-item">Página {currentPage}</li>
                <li className="page-item">
                    <button className="btn btn-light" type="button" onClick={() => onNextPage()} aria-label="Next">
                        <span style={{ fontSize: '1.6em' }} aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default PaginatorComponent;