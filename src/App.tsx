import React, { useState } from 'react';
import { Calendar, FileText, Users, MapPin, Scale, Signature } from 'lucide-react';

function App() {
  const [currentDate] = useState(new Date().toLocaleDateString('de-DE', { 
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
              <h1 className="text-2xl font-bold text-slate-800">Rechtsdokument</h1>
              <p className="text-slate-600">Ehevertrag</p>
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
            <h1 className="text-3xl font-bold mb-2">EHEVERTRAG</h1>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Calendar className="h-4 w-4" />
              <span>Ausgeführt am {currentDate}</span>
            </div>
          </div>

          {/* Document Body */}
          <div className="p-8 space-y-8">
            {/* Introduction */}
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed text-slate-700">
                Dieser Ehevertrag wird am{' '}
                <span className="font-semibold text-blue-600">{currentDate}</span> geschlossen zwischen den folgenden Parteien:
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
                  <h3 className="font-semibold text-slate-800">Partei 1</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Vollständiger rechtlicher Name</label>
                    <p className="text-slate-800 font-medium">Nikolaus Krawutschke</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Adresse</label>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-slate-400 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">
                        Damaschkestr. 49<br />
                        Karlsruhe, Baden-Württemberg<br />
                        76133 Deutschland
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
                  <h3 className="font-semibold text-slate-800">Partei 2</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Vollständiger rechtlicher Name</label>
                    <p className="text-slate-800 font-medium">Tiffany Dawson</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Adresse</label>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-slate-400 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">
                        13140 S Rhodes Ave<br />
                        Chicago, Illinois<br />
                        60827 Vereinigte Staaten
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
                PRÄAMBEL
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>IN ANBETRACHT DESSEN,</strong> dass die Parteien eine rechtliche Ehe in naher Zukunft beabsichtigen und mit diesem Vertrag ihre jeweiligen finanziellen und vermögensrechtlichen Ansprüche während der Ehe sowie im Falle einer Trennung, Scheidung oder des Todes regeln wollen;
                </p>
                <p>
                  <strong>IN ANBETRACHT DESSEN,</strong> dass beide Parteien bestätigen, diesen Vertrag frei, freiwillig und mit vollständiger Offenlegung aller Vermögenswerte und Verbindlichkeiten abzuschließen;
                </p>
                <p>
                  <strong>JETZT, DANN,</strong> in Anbetracht der gegenseitigen Versprechen und Vereinbarungen in diesem Vertrag und mit der Absicht, rechtlich gebunden zu sein, vereinbaren die Parteien Folgendes:
                </p>
              </div>
            </div>

            {/* Terms Section */}
            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">BEDINGUNGEN UND VEREINBARUNGEN</h2>
              <div className="space-y-6">
                {/* Term 1 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    1. Offenlegung von Vermögenswerten und Verbindlichkeiten
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Jede Partei bestätigt, dass sie vor der Ausführung dieses Vertrags eine faire und angemessene Offenlegung aller finanziellen Verpflichtungen, Vermögenswerte, Einkünfte und Verbindlichkeiten vorgenommen hat.
                  </p>
                </div>

                {/* Term 2 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    2. Getrenntes Eigentum
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Alle Vermögenswerte, ob real, persönlich, materiell oder immateriell, die derzeit im alleinigen Eigentum einer Partei stehen oder in Zukunft erworben werden, sowie alle daraus resultierenden Einkünfte oder Erträge, bleiben alleiniges und getrenntes Eigentum dieser Partei, sofern nicht schriftlich anders vereinbart.
                  </p>
                </div>

                {/* Term 3 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    3. Gemeinsames Eigentum
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Während der Ehe gemeinsam erworbenes Eigentum gilt als eheliches Vermögen, sofern nicht anders bestimmt, und unterliegt einer gerechten Verteilung gemäß geltendem Recht.
                  </p>
                </div>

                {/* Term 4 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    4. Ehegattenunterhalt
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Jede Partei verzichtet auf jegliche Ansprüche auf Ehegattenunterhalt oder Alimente von der anderen Partei, außer es wird ausdrücklich in einer separaten schriftlichen Vereinbarung geregelt.
                  </p>
                </div>

                {/* Term 5 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    5. Erbrechte
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Jede Partei verzichtet auf alle Rechte am Nachlass der anderen Partei, die sich aus der Ehe ergeben könnten, einschließlich, aber nicht beschränkt auf Erbansprüche, Witwen- oder Witwerrenten und gesetzliche Erbfolge.
                  </p>
                </div>

                {/* Term 6 */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    6. Anwendbares Recht
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Dieser Vertrag unterliegt den Gesetzen der Gerichtsbarkeit, in der die Ehe geschlossen wird, und ist entsprechend auszulegen.
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
                UNTERSCHRIFTEN
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Party 1 Signature */}
                <div className="space-y-4">
                  <div className="border-b-2 border-slate-300 pb-2">
                    <p className="text-sm text-slate-600 mb-8">Unterschrift von Nikolaus Krawutschke</p>
                  </div>
                  <div className="text-sm text-slate-600">
                    Datum: _________________
                  </div>
                </div>

                {/* Party 2 Signature */}
                <div className="space-y-4">
                  <div className="border-b-2 border-slate-300 pb-2">
                    <p className="text-sm text-slate-600 mb-8">Unterschrift von Tiffany Dawson</p>
                  </div>
                  <div className="text-sm text-slate-600">
                    Datum: _________________
                  </div>
                </div>
              </div>

              {/* Notary Section */}
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-semibold text-amber-800 mb-4">Notarielle Beglaubigung</h3>
                <div className="space-y-4 text-sm text-amber-700">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p>Notar: _________________</p>
                    </div>
                    <div>
                      <p>Gültigkeitsdauer der Kommission: _________________</p>
                    </div>
                  </div>
                  <div className="border-t border-amber-200 pt-4">
                    <p className="text-xs text-amber-600">
                      Bundesland _________________, Landkreis _________________
                    </p>
                    <div className="mt-4 border-b border-amber-300 pb-2">
                      <p className="text-xs text-amber-600 mb-6">Notarsiegel und Unterschrift</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="border-t border-slate-200 pt-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-700">
                  <strong>Wichtiger rechtlicher Hinweis:</strong> Dieses Dokument ist eine Vorlage und sollte vor der Ausführung von qualifiziertem Rechtsbeistand überprüft werden. Die Gesetze variieren je nach Gerichtsbarkeit, und dieser Vertrag ist möglicherweise ohne ordnungsgemäße rechtliche Prüfung und Einhaltung der lokalen Anforderungen nicht gültig oder durchsetzbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-slate-500 text-sm">
        <p>Dieses Dokument wurde erstellt am {currentDate}</p>
      </div>
    </div>
  );
}

export default App;