'use client'
import React from 'react'
export default function Deletebtn(props: any) {
    return (
        <div>
            <button
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/20 hover:border-transparent"
                onClick={() => {
                    props.deleteFn(props.id);
                }}
            >
                Delete
            </button>
        </div>
    )
}
