import React from 'react';
import modals from '../portfolioModals.json';

function Modals() {
  return (
    <div>
      {modals.map(modal => {
        return (
          <div
            className='portfolio-modal modal fade'
            id={modal.id}
            tabIndex={-1}
            role='dialog'
            aria-hidden='true'
            key={modal.id}
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='close-modal' data-dismiss='modal'>
                  <img src='assets/img/close-icon.svg' alt='close square' />
                </div>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      <div className='modal-body'>
                        <h2 className='text-uppercase'>{modal.title}</h2>
                        <img
                          className='img-fluid d-block mx-auto'
                          src={modal.img}
                          alt={modal.alt}
                        />
                        <h4>Description</h4>
                        <p>{modal.description}</p>
                        <h4>Technologies</h4>
                        <p>{modal.technologies}</p>
                        <a
                          className='btn btn-primary'
                          type='button'
                          href={modal.demoLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Demo
                        </a>
                        {modal.repoLink && (
                          <a
                            className='btn btn-primary mx-2'
                            type='button'
                            href={modal.repoLink}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            Repo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Modals;
