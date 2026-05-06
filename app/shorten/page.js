"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Transform, ContentCopy, CheckCircle, Link as LinkIcon, ArrowForward } from '@mui/icons-material'

const page = () => {
    const [url, seturl] = useState('')
    const [shorturl, setshorturl] = useState('')
    const [Generated, setGenerated] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [copied, setCopied] = useState(false)

    const generate = async () => {
        if (!url.trim()) {
            alert('Please enter a URL')
            return
        }

        setIsLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("/api/generate", requestOptions);
            const result = await response.json();

            setGenerated(`${process.env.NEXT_PUBLIC_HOST_URL}/${shorturl}`);
            seturl('');
            setshorturl('');
            console.log(result);
            alert(result.message);
        } catch (error) {
            console.error(error);
            alert('Error generating short URL. Please try again.');
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(Generated)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                        <Transform sx={{ fontSize: 18, marginRight: 1 }} />
                        URL Shortener
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Create Your Short Link
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Transform long URLs into clean, shareable links in seconds. No signup required.
                    </p>
                </div>

                {/* Main Form Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-2xl mx-auto">
                    <div className="space-y-8">
                        {/* URL Input */}
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                                <LinkIcon sx={{ fontSize: 24 }} />
                                Original URL
                            </label>
                            <input
                                value={url}
                                onChange={(e) => { seturl(e.target.value) }}
                                className='w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-lg outline-none'
                                type="url"
                                placeholder='https://example.com/very-long-url-that-needs-shortening'
                                required
                            />
                        </div>

                        {/* Custom Short URL Input */}
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                                <Transform sx={{ fontSize: 24 }} />
                                Custom Short URL (Optional)
                            </label>
                            <div className="flex items-center">
                                <span className="bg-gray-100 px-4 py-4 border-2 border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                                    {process.env.NEXT_PUBLIC_HOST_URL}/
                                </span>
                                <input
                                    value={shorturl}
                                    onChange={(e) => { setshorturl(e.target.value) }}
                                    className='flex-1 p-4 border-2 border-l-0 border-gray-200 rounded-r-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-lg outline-none'
                                    type="text"
                                    placeholder='my-short-link'
                                />
                            </div>
                            <p className="text-sm text-gray-500">Leave empty for auto-generated short URL</p>
                        </div>

                        {/* Generate Button */}
                        <button
                            onClick={generate}
                            disabled={isLoading}
                            className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3'
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Transform sx={{ fontSize: 24 }} />
                                    Generate Short URL
                                    <ArrowForward sx={{ fontSize: 24 }} />
                                </>
                            )}
                        </button>
                    </div>

                    {/* Generated URL Section */}
                    {Generated && (
                        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border-2 border-green-200">
                            <div className="flex items-center gap-2 mb-3">
                                <CheckCircle sx={{ fontSize: 24, color: '#10b981' }} />
                                <span className="text-lg font-semibold text-green-800">Your Short URL is Ready!</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                                <Link
                                    target='_blank'
                                    href={Generated}
                                    className="flex-1 text-blue-600 hover:text-blue-800 font-medium text-lg break-all"
                                >
                                    {Generated}
                                </Link>
                                <button
                                    onClick={copyToClipboard}
                                    className={`p-3 rounded-lg transition-all duration-300 ${copied
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800'
                                        }`}
                                >
                                    {copied ? <CheckCircle sx={{ fontSize: 20 }} /> : <ContentCopy sx={{ fontSize: 20 }} />}
                                </button>
                            </div>
                            {copied && (
                                <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                                    <CheckCircle sx={{ fontSize: 16 }} />
                                    Copied to clipboard!
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Features Section */}
                <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Transform sx={{ fontSize: 24, color: '#3b82f6' }} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Instant Generation</h3>
                        <p className="text-gray-600">Get your short URL in milliseconds</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <LinkIcon sx={{ fontSize: 24, color: '#8b5cf6' }} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Reliable Links</h3>
                        <p className="text-gray-600">Your links stay active forever</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle sx={{ fontSize: 24, color: '#10b981' }} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">No Tracking</h3>
                        <p className="text-gray-600">100% privacy focused</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
