"use client";

import { useState, useRef } from "react";
import {
  Upload, FileImage, CheckCircle2, Send, User, Phone,
  MessageSquare, Zap, Shield, Clock, Paperclip, ArrowRight, Download,
  Plus, Trash2, ClipboardList,
} from "lucide-react";

const SECTION_STYLE = {
  background: "linear-gradient(135deg, #0a0f1e 0%, #0d2456 35%, #091b46 65%, #070e24 100%)",
};

const steps = [
  { icon: FileImage, step: "01", title: "Fill your details", desc: "Name and mobile number so we can contact you" },
  { icon: Upload, step: "02", title: "Upload prescription", desc: "Attach a photo or PDF of your doctor's Rx" },
  { icon: Zap, step: "03", title: "We confirm in minutes", desc: "Pharmacist checks stock and calls you back" },
  { icon: CheckCircle2, step: "04", title: "Pick up or delivery", desc: "Visit us or request home delivery" },
];

export default function PrescriptionUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState<string>("");
  const [isImage, setIsImage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  // Numbered medicine list
  const [medicines, setMedicines] = useState<string[]>([""]);
  const fileRef = useRef<HTMLInputElement>(null);

  function addMedicine() {
    setMedicines((prev) => [...prev, ""]);
  }
  function removeMedicine(i: number) {
    setMedicines((prev) => prev.filter((_, idx) => idx !== i));
  }
  function updateMedicine(i: number, val: string) {
    setMedicines((prev) => prev.map((m, idx) => (idx === i ? val : m)));
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setFileName(f.name);
    const imgType = f.type.startsWith("image/");
    setIsImage(imgType);
    if (imgType) {
      setFilePreview(URL.createObjectURL(f));
    } else {
      setFilePreview("");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Only text goes via WhatsApp URL (wa.me limitation — file must be attached manually)
    const filledMedicines = medicines.filter((m) => m.trim() !== "");
    const medicineList =
      filledMedicines.length > 0
        ? filledMedicines.map((m, i) => `${i + 1}. ${m.trim()}`).join("\n")
        : "Not specified";

    const msg = encodeURIComponent(
      `Hello! Medicine order request.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n\n` +
      `Medicines Required:\n${medicineList}\n\n` +
      `Note: ${form.message || "N/A"}\n\n` +
      `Please confirm availability.`
    );

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/918934848480?text=${msg}`, "_blank");
    }, 1000);
  }

  // ── SUCCESS SCREEN ──
  if (submitted) {
    return (
      <section id="prescription" className="py-24 relative overflow-hidden" style={SECTION_STYLE}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(26,86,219,0.2) 0%, transparent 70%)" }} />

        <div className="relative max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-400/30 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">WhatsApp Opened!</h3>
            <p className="text-white/50 text-base">
              Your details have been sent as a text message. Now follow these steps to attach your prescription.
            </p>
          </div>

          {/* Step-by-step guide */}
          <div className="rounded-3xl p-6 mb-6 border border-white/10"
            style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}>
            <p className="text-white font-black text-base mb-5 flex items-center gap-2">
              <Paperclip className="w-5 h-5 text-cyan-400" />
              How to send your prescription photo in WhatsApp:
            </p>
            <div className="space-y-4">
              {[
                { n: "1", text: "WhatsApp has opened — your name, phone & note are already filled in.", done: true },
                { n: "2", text: 'Tap the attachment icon  📎  (next to the text box in WhatsApp).' },
                { n: "3", text: 'Select "Gallery" or "Document" and choose your prescription photo.' },
                { n: "4", text: "Tap Send — our pharmacist will confirm medicines within minutes." },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-4">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black mt-0.5 ${
                    s.done ? "bg-green-500 text-white" : "bg-white/10 text-white/60"
                  }`}>
                    {s.done ? "✓" : s.n}
                  </div>
                  <p className={`text-sm leading-relaxed ${s.done ? "text-green-300 line-through opacity-70" : "text-white/70"}`}>
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Prescription preview + download */}
          {file && (
            <div className="rounded-3xl p-5 mb-6 border border-amber-400/20"
              style={{ background: "rgba(251,191,36,0.07)" }}>
              <p className="text-amber-300 font-black text-sm mb-4 flex items-center gap-2">
                <FileImage className="w-4 h-4" />
                Your uploaded prescription — save and attach in WhatsApp:
              </p>

              {isImage && filePreview ? (
                <div className="relative rounded-2xl overflow-hidden bg-black/20 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={filePreview}
                    alt="Prescription preview"
                    className="w-full max-h-52 object-contain"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 bg-white/5 rounded-2xl p-4 mb-4">
                  <FileImage className="w-8 h-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm">{fileName}</p>
                    <p className="text-white/40 text-xs">PDF / Document</p>
                  </div>
                </div>
              )}

              <a
                href={filePreview || "#"}
                download={fileName}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-black py-3 rounded-xl transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Save / Download Prescription
              </a>
              <p className="text-amber-400/60 text-xs text-center mt-2">
                Save this image → then attach it in the WhatsApp chat that just opened
              </p>
            </div>
          )}

          {/* Open WhatsApp again + reset */}
          <div className="flex gap-3">
            <a
              href={`https://wa.me/918934848480`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-2xl transition-colors text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Open WhatsApp Again
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                setFile(null);
                setFileName("");
                setFilePreview("");
                setIsImage(false);
                setForm({ name: "", phone: "", message: "" });
                setMedicines([""]);
              }}
              className="flex items-center gap-2 border border-white/15 hover:bg-white/10 text-white/60 hover:text-white font-semibold py-4 px-5 rounded-2xl transition-colors text-sm"
            >
              <ArrowRight className="w-4 h-4" />
              New Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── FORM SCREEN ──
  return (
    <section id="prescription" className="py-24 relative overflow-hidden" style={SECTION_STYLE}>
      {/* BG orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,86,219,0.18) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)", animationDelay: "3s" }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-white/10"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            ✦ Easy Prescription Order
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Upload Your{" "}
            <span className="gradient-text">Prescription</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Fill the form — your details open WhatsApp automatically. Then attach the prescription photo there.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          {/* Left — steps + trust */}
          <div>
            <div className="space-y-4 mb-8">
              {steps.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="flex items-start gap-5 rounded-2xl p-5 border border-white/10"
                  style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)" }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs font-black tracking-widest mb-0.5">STEP {step}</p>
                    <p className="text-white font-black text-base">{title}</p>
                    <p className="text-white/40 text-sm mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note about image */}
            <div className="rounded-2xl p-5 border border-amber-400/20 mb-6"
              style={{ background: "rgba(251,191,36,0.07)" }}>
              <div className="flex items-start gap-3">
                <Paperclip className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-300 font-black text-sm mb-1">About your prescription photo</p>
                  <p className="text-amber-400/70 text-xs leading-relaxed">
                    WhatsApp links can only carry text. After submitting, WhatsApp will open with your details pre-filled.
                    You will then need to <strong className="text-amber-300">manually attach</strong> your prescription photo using the 📎 icon in WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Shield, text: "100% Private", sub: "Your data is safe" },
                { icon: Clock, text: "Fast Reply", sub: "Within minutes" },
                { icon: Zap, text: "WhatsApp", sub: "Instant connect" },
              ].map(({ icon: Icon, text, sub }) => (
                <div key={text} className="rounded-2xl p-4 text-center border border-white/10"
                  style={{ background: "rgba(255,255,255,0.05)" }}>
                  <Icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                  <p className="text-white font-black text-sm">{text}</p>
                  <p className="text-white/30 text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white dark:bg-[#0e1a38] rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">Order Form</h3>
            <p className="text-gray-400 text-sm mb-7">
              Fill in your details — we&apos;ll reach out via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-[#0a1228] border border-gray-200 dark:border-[#1e2d4f] rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Mobile Number <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="tel" name="phone" required value={form.phone} onChange={handleChange}
                    placeholder="10-digit mobile number" pattern="[0-9]{10}" maxLength={10}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-[#0a1228] border border-gray-200 dark:border-[#1e2d4f] rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* ── Prescription Medicine Names (Numbered) ── */}
              <div>
                <label className="block text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ClipboardList className="w-3.5 h-3.5" />
                  Prescription / Medicine Names
                </label>
                <div className="space-y-2.5 mb-3">
                  {medicines.map((med, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {/* Row number */}
                      <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-black flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      {/* Input */}
                      <input
                        type="text"
                        value={med}
                        onChange={(e) => updateMedicine(i, e.target.value)}
                        placeholder={`Medicine name ${i + 1}…`}
                        className="flex-1 px-3.5 py-2.5 bg-gray-50 dark:bg-[#0a1228] border border-gray-200 dark:border-[#1e2d4f] rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      {/* Remove — only show if more than 1 row */}
                      {medicines.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeMedicine(i)}
                          className="w-7 h-7 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 flex items-center justify-center transition-colors flex-shrink-0"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {/* Add row button */}
                <button
                  type="button"
                  onClick={addMedicine}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-black hover:text-blue-700 dark:hover:text-blue-300 transition-colors py-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Another Medicine
                </button>
              </div>

              {/* ── File Upload — Disabled (Coming Soon) ── */}
              <div>
                <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                  Prescription (Photo / PDF)
                </label>
                {/* Coming soon notice */}
                <p className="text-[11px] text-amber-500 dark:text-amber-400 font-semibold mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full inline-block" />
                  Future mein isko integrate kiya jayega — abhi available nahi hai
                </p>
                {/* Disabled upload area */}
                <div className="w-full border-2 border-dashed border-gray-200 dark:border-gray-700/50 rounded-2xl py-6 flex flex-col items-center gap-2 opacity-40 cursor-not-allowed bg-gray-50 dark:bg-gray-800/10 select-none">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700/30 rounded-xl flex items-center justify-center">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-400 font-semibold text-sm">Upload Prescription</p>
                  <p className="text-gray-300 dark:text-gray-600 text-xs">Coming Soon</p>
                </div>
                {/* Hidden input — kept but disabled */}
                <input ref={fileRef} type="file" accept="image/*,.pdf" className="hidden" onChange={handleFile} disabled />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} rows={3}
                  placeholder="Medicine name, dosage, or delivery request…"
                  className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#0a1228] border border-gray-200 dark:border-[#1e2d4f] rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                />
              </div>

              {/* Submit */}
              <button
                type="submit" disabled={loading}
                className="w-full relative overflow-hidden btn-premium text-white font-black py-4 rounded-xl text-base flex items-center justify-center gap-3 shadow-xl shadow-blue-200/30 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="relative z-10">Opening WhatsApp…</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="relative z-10">Submit & Open WhatsApp</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1.5">
                <MessageSquare className="w-3 h-3" />
                Your details are shared only with our pharmacist via WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
