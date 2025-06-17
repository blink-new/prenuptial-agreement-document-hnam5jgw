import React, { useState } from 'react';
import { Calendar, FileText, Users, MapPin, Scale, Signature } from 'lucide-react';

function App() {
  const [currentDate] = useState(new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Legal Document</h1>
              <p className="text-slate-600">Prenuptial Agreement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Document Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Document Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h1 className="text-3xl font-bold mb-2">PRENUPTIAL AGREEMENT</h1>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Calendar className="h-4 w-4" />
              <span>Executed on {currentDate}</span>
            </div>
          </div>

          {/* Document Body */}
          <div className="p-8 space-y-8">
            {/* Introduction */}
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed text-slate-700">
                This Prenuptial Agreement is made and entered into on this{' '}
                <span className="font-semibold text-blue-600">{currentDate}</span>, by and between:
              </p>
            </div>

            {/* Parties Section */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Party 1 */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800">Party 1</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Full Legal Name</label>
                    <p className="text-slate-800 font-medium">Nikolaus Krawutschke</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Address</label>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-slate-400 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">
                        Damaschkestr. 49<br />
                        Karlsruhe, Baden-Württemberg<br />
                        76133 Germany
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Party 2 */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800">Party 2</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Full Legal Name</label>
                    <p className="text-slate-800 font-medium">Tiffany Dawson</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Address</label>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-slate-400 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">
                        13140 S Rhodes Ave<br />
                        Chicago, Illinois<br />
                        60827 United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recitals Section */}
            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Scale className="h-5 w-5 text-blue-600" />
                </div>
                RECITALS
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>WHEREAS,</strong> the Parties contemplate legal marriage in the near future and intend by this Agreement to define their respective financial and property rights during the marriage, in the event of separation, divorce, or death;
                </p>
                <p>
                  <strong>WHEREAS,</strong> both Parties acknowledge they are entering into this Agreement freely, voluntarily, and with full disclosure of all assets and liabilities;
                </p>
                <p>
                  <strong>NOW, THEREFORE,</strong> in consideration of the mutual promises and covenants herein contained and intending to be legally bound, the Parties agree as follows:
                </p>
              </div>
            </div>

            {/* Terms Section */}
            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">TERMS AND CONDITIONS</h2>
              <div className="space-y-6">
                {/* Term 1 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    1. Disclosure of Assets and Liabilities
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Each Party affirms that prior to the execution of this Agreement, they have provided a fair and reasonable disclosure of all financial obligations, assets, income, and liabilities.
                  </p>
                </div>

                {/* Term 2 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    2. Separate Property
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    All property, whether real, personal, tangible, or intangible, currently owned or acquired in the future by either Party individually, and any income or proceeds derived therefrom, shall remain the sole and separate property of that Party unless otherwise agreed to in writing.
                  </p>
                </div>

                {/* Term 3 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    3. Joint Property
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Property jointly acquired during the marriage shall be considered marital property, unless designated otherwise, and shall be subject to equitable distribution in accordance with applicable law.
                  </p>
                </div>

                {/* Term 4 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    4. Spousal Support
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Each Party waives any right to spousal support or alimony from the other Party, except as may be specifically provided for in a separate written agreement.
                  </p>
                </div>

                {/* Term 5 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    5. Estate Rights
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Each Party waives all rights in the estate of the other Party that might otherwise arise by reason of the marriage, including but not limited to rights of inheritance, dower, curtesy, and intestate succession.
                  </p>
                </div>

                {/* Term 6 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    6. Governing Law
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which the marriage takes place.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Signature className="h-5 w-5 text-blue-600" />
                </div>
                SIGNATURES
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Party 1 Signature */}
                <div className="space-y-4">
                  <div className="border-b-2 border-slate-300 pb-2">
                    <p className="text-sm text-slate-600 mb-8">Signature of Nikolaus Krawutschke</p>
                  </div>
                  <div className="text-sm text-slate-600">
                    Date: _________________
                  </div>
                </div>

                {/* Party 2 Signature */}
                <div className="space-y-4">
                  <div className="border-b-2 border-slate-300 pb-2">
                    <p className="text-sm text-slate-600 mb-8">Signature of Tiffany Dawson</p>
                  </div>
                  <div className="text-sm text-slate-600">
                    Date: _________________
                  </div>
                </div>
              </div>

              {/* Notary Section */}
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-semibold text-amber-800 mb-4">Notarization</h3>
                <div className="space-y-4 text-sm text-amber-700">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p>Notary Public: _________________</p>
                    </div>
                    <div>
                      <p>Commission Expires: _________________</p>
                    </div>
                  </div>
                  <div className="border-t border-amber-200 pt-4">
                    <p className="text-xs text-amber-600">
                      State of _________________, County of _________________
                    </p>
                    <div className="mt-4 border-b border-amber-300 pb-2">
                      <p className="text-xs text-amber-600 mb-6">Notary Seal and Signature</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="border-t border-slate-200 pt-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-700">
                  <strong>Important Legal Notice:</strong> This document is a template and should be reviewed by qualified legal counsel before execution. Laws vary by jurisdiction, and this agreement may not be valid or enforceable without proper legal review and compliance with local requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-slate-500 text-sm">
        <p>This document was generated on {currentDate}</p>
      </div>
    </div>
  );
}

export default App;