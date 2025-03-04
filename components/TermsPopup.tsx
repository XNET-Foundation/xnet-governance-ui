import Modal from './Modal'
import Button, { SecondaryButton } from './Button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const TermsPopupModal = () => {
  const [openModal, setOpenModal] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (localStorage) {
      const isTermAccepted =
        typeof window !== 'undefined'
          ? localStorage.getItem('accept-terms') === 'true'
          : false

      if (isTermAccepted) {
        setOpenModal(false)
      }
    }
  })

  const acceptTerms = () => {
    localStorage.setItem('accept-terms', 'true')
    setOpenModal(false)
  }

  const rejectTerms = () => {
    localStorage.setItem('accept-terms', 'false')
    router.push('https://realms.today?terms=rejected')
  }

  return (
    <>
      {isClient && openModal ? (
        <Modal
          isOpen={openModal && isClient}
          onClose={() => setOpenModal(false)}
          bgClickClose={false}
          hideClose={true}
        >
          <p className="text-justify">
          XNET’s governance is driven by those who stake PST (Proof of Staking) tokens, 
          giving them the power to vote on key decisions that shape the network. PST tokens 
          are earned by staking XNET for rewards, which can be done through the Staking page. 
          Your voting power scales with your stake, ensuring that active participants have a meaningful impact. 
          Note that staked PST may be subject to a locking period before withdrawal. By clicking "Accept," you 
          confirm your participation under these terms and commit to shaping the future of XNET.
          </p>
          <div className="flex gap-4 mt-4 justify-center">
            <Button onClick={acceptTerms}>Accept</Button>
            <SecondaryButton onClick={rejectTerms}>Reject</SecondaryButton>
          </div>
        </Modal>
      ) : null}
    </>
  )
}

export default TermsPopupModal
