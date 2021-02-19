import { FingerPrintOutline } from 'heroicons-react'
import React from 'react'

const GPG = () => {
  return (
    <div className="lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <FingerPrintOutline size={28} className="mr-4" />
        <div>GPG</div>
      </div>

      <div className="leading-relaxed mt-12">
        I have verified my identity with a GPG signature, proving my ownership of this domain. View the cryptography
        proof here:{' '}
        <a
          className="p-1 bg-indigo-50 hover:text-indigo-600"
          href="http://keybase.io/spencerwoo/sigchain#abb6f40f8c804e7411e91544b7cdb8e011df8e6f84dcd0b709f848f85dc6248d0f"
          target="_blank"
          rel="noopener noreferrer"
        >
          Keybase domain ownership
        </a>
        . Pull my GPG public key hosted at{' '}
        <a
          className="p-1 bg-yellow-50 hover:text-yellow-600"
          href="http://keybase.io/spencerwoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Keybase
        </a>{' '}
        with:
        <pre className="font-mono p-2 mt-2 border-2 border-gray-100 rounded overflow-auto">
          curl https://keybase.io/spencerwoo/pgp_keys.asc | gpg --import
        </pre>
      </div>

      <div className="leading-relaxed mt-2">Everybody loves a bit of crypto now and then.</div>
    </div>
  )
}

export default GPG
