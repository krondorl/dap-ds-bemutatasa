import { useState } from 'react';
import './App.css'
import { DapDSModalReact, DapDSButtonReact, DapDSBadgeReact, DapDSBannerReact, DapDSAccordionGroupReact, DapDSAccordionReact, DapDSTypographyReact } from 'dap-design-system/dist/react'

function App() {
  const [opened, setOpened] = useState(false);

  const openModal = () => {
    setOpened(true);
  }

  const closeModal = () => {
    setOpened(false);
  }

  return (
    <>
      <main className="main">
        <h1>DÁP DS example</h1>
        <div>
          <DapDSButtonReact onClick={openModal}>Open</DapDSButtonReact>
          <DapDSModalReact
            open={opened}
            onDdsClose={closeModal}
            title="This is a title"
            description="Description of the modal">
          </DapDSModalReact>
        </div>
        <div>
          <DapDSBadgeReact>Default Badge</DapDSBadgeReact>
        </div>
        <div>
          <DapDSBannerReact>You have a new package!</DapDSBannerReact>
        </div>
        <div>
          <DapDSAccordionGroupReact>
            <DapDSAccordionReact>
                <span slot="heading">First accordion</span>
                <DapDSTypographyReact variant="body" size="md">
                  Firrrst Nam ultricies justo magna, id scelerisque mauris tempus
                  non. Curabitur viverra nulla leo, a rutrum nisi porta a. Duis tempor
                  enim lorem, vestibulum facilisis tortor pharetra quis.
                </DapDSTypographyReact>
            </DapDSAccordionReact>
            <DapDSAccordionReact>
              <span slot="heading">Second accordion</span>
              <DapDSTypographyReact variant="body" size="md">
                Second Nam ultricies justo magna, id scelerisque mauris tempus
                non. Curabitur viverra nulla leo, a rutrum nisi porta a. Duis tempor
                enim lorem, vestibulum facilisis tortor pharetra quis.
              </DapDSTypographyReact>
            </DapDSAccordionReact>
          </DapDSAccordionGroupReact>
        </div>
      </main>
    </>
  )
}

export default App
