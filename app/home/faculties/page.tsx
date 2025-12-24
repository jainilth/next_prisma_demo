import { faculties } from '@/app/generated/prisma/client'
import { prisma } from '@/app/lib/prisma'
import Link from 'next/link'
import React from 'react'

async function Faculties() {
  const data=await prisma.faculties.findMany()
  
  return (
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-medium">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-base font-medium">
                Id
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                name
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-base font-medium">
                email
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-base font-medium">
                city
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-base font-medium">
                details
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((fac:faculties) => (
              <tr key={fac.id} className="bg-neutral-primary">
                <td>{fac.id}</td>
                <td>{fac.name}</td>
                <td>{fac.email}</td>
                <td>{fac.city}</td>
                <td>
                  <Link href={`faculties/${fac.id}`}>
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Faculties
