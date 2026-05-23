const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()

async function main() {
  const adminPassword = await bcrypt.hash('AdminPass123!', 10)
  await prisma.admin.upsert({
    where: { email: 'admin@klarpath.com' },
    update: { password_hash: adminPassword },
    create: {
      email: 'admin@klarpath.com',
      password_hash: adminPassword,
      role: 'superadmin',
    },
  })

  const englishgarden = await prisma.business.upsert({
    where: { subdomain: 'englishgarden' },
    update: {
      name: 'English Garden Services',
      email: 'hello@englishgarden.kp',
      phone: '+44 20 7946 0835',
      industry: 'hvac',
      website_url: 'https://englishgarden.klarpath.com',
      business_address: '220 Baker Street, London',
    },
    create: {
      name: 'English Garden Services',
      email: 'hello@englishgarden.kp',
      phone: '+44 20 7946 0835',
      subdomain: 'englishgarden',
      industry: 'hvac',
      website_url: 'https://englishgarden.klarpath.com',
      business_address: '220 Baker Street, London',
      timezone: 'Europe/London',
    },
  })

  const ownerPassword = await bcrypt.hash('OwnerPass123!', 10)
  const owner = await prisma.businessOwner.upsert({
    where: { business_id_email: { business_id: englishgarden.id, email: 'owner@englishgarden.kp' } },
    update: {
      first_name: 'Ava',
      last_name: 'Green',
      phone: '+44 20 7946 0001',
      is_active: true,
      role: 'owner',
      password_hash: ownerPassword,
    },
    create: {
      business_id: englishgarden.id,
      email: 'owner@englishgarden.kp',
      password_hash: ownerPassword,
      first_name: 'Ava',
      last_name: 'Green',
      phone: '+44 20 7946 0001',
      role: 'owner',
    },
  })

  const hvac = await prisma.business.upsert({
    where: { subdomain: 'hvac' },
    update: {
      name: 'CoolBreeze HVAC',
      email: 'hello@hvac.kp',
      phone: '+44 20 7123 4567',
      industry: 'hvac',
      website_url: 'https://hvac.klarpath.com',
      business_address: '45 Baker Street, London',
      timezone: 'Europe/London',
      status: 'active',
    },
    create: {
      name: 'CoolBreeze HVAC',
      email: 'hello@hvac.kp',
      phone: '+44 20 7123 4567',
      subdomain: 'hvac',
      industry: 'hvac',
      website_url: 'https://hvac.klarpath.com',
      business_address: '45 Baker Street, London',
      timezone: 'Europe/London',
    },
  })

  const hvacOwner = await prisma.businessOwner.upsert({
    where: { business_id_email: { business_id: hvac.id, email: 'owner@hvac.kp' } },
    update: {
      first_name: 'Noah',
      last_name: 'Taylor',
      phone: '+44 20 7123 0001',
      is_active: true,
      role: 'owner',
      password_hash: ownerPassword,
    },
    create: {
      business_id: hvac.id,
      email: 'owner@hvac.kp',
      password_hash: ownerPassword,
      first_name: 'Noah',
      last_name: 'Taylor',
      phone: '+44 20 7123 0001',
      role: 'owner',
    },
  })

  const plumbing = await prisma.business.upsert({
    where: { subdomain: 'plumbing' },
    update: {
      name: 'PlumbMate',
      email: 'hello@plumbing.kp',
      phone: '+44 20 7345 6789',
      industry: 'plumbing',
      website_url: 'https://plumbing.klarpath.com',
      business_address: '78 Fleet Street, London',
      timezone: 'Europe/London',
      status: 'active',
    },
    create: {
      name: 'PlumbMate',
      email: 'hello@plumbing.kp',
      phone: '+44 20 7345 6789',
      subdomain: 'plumbing',
      industry: 'plumbing',
      website_url: 'https://plumbing.klarpath.com',
      business_address: '78 Fleet Street, London',
      timezone: 'Europe/London',
    },
  })

  const plumbingOwner = await prisma.businessOwner.upsert({
    where: { business_id_email: { business_id: plumbing.id, email: 'owner@plumbing.kp' } },
    update: {
      first_name: 'Eva',
      last_name: 'Morgan',
      phone: '+44 20 7345 0001',
      is_active: true,
      role: 'owner',
      password_hash: ownerPassword,
    },
    create: {
      business_id: plumbing.id,
      email: 'owner@plumbing.kp',
      password_hash: ownerPassword,
      first_name: 'Eva',
      last_name: 'Morgan',
      phone: '+44 20 7345 0001',
      role: 'owner',
    },
  })

  const clients = [
    {
      first_name: 'Tom',
      last_name: 'Baker',
      email: 'tom.baker@example.com',
      phone: '+44 7425 123456',
      address: '12 Orchard Road',
      city: 'London',
      postcode: 'N1 9GU',
    },
    {
      first_name: 'Lisa',
      last_name: 'Moore',
      email: 'lisa.moore@example.com',
      phone: '+44 7425 654321',
      address: '88 Kingsway',
      city: 'London',
      postcode: 'SW1A 2AA',
    },
  ]

  const createdClients = []
  for (const clientData of clients) {
    const client = await prisma.client.upsert({
      where: {
        business_id_email: {
          business_id: englishgarden.id,
          email: clientData.email,
        },
      },
      update: clientData,
      create: {
        business_id: englishgarden.id,
        ...clientData,
      },
    })
    createdClients.push(client)
  }

  const services = [
    { name: 'HVAC Maintenance', duration_minutes: 60, price: 120.0, description: 'Routine HVAC inspection and servicing.' },
    { name: 'Boiler Repair', duration_minutes: 120, price: 240.0, description: 'Emergency boiler diagnostics and repair.' },
  ]

  const createdServices = []
  for (const serviceData of services) {
    let service = await prisma.service.findFirst({
      where: { business_id: englishgarden.id, name: serviceData.name },
    })

    if (!service) {
      service = await prisma.service.create({
        data: {
          business_id: englishgarden.id,
          ...serviceData,
        },
      })
    } else {
      service = await prisma.service.update({
        where: { id: service.id },
        data: serviceData,
      })
    }

    createdServices.push(service)
  }

  const hvacServices = [
    { name: 'HVAC Inspection', duration_minutes: 60, price: 120.0, description: 'Comprehensive HVAC inspection and maintenance.' },
    { name: 'AC Repair', duration_minutes: 120, price: 220.0, description: 'AC repair and emergency diagnostics.' },
  ]

  for (const serviceData of hvacServices) {
    const existingService = await prisma.service.findFirst({
      where: { business_id: hvac.id, name: serviceData.name },
    })
    if (!existingService) {
      await prisma.service.create({ data: { business_id: hvac.id, ...serviceData } })
    } else {
      await prisma.service.update({ where: { id: existingService.id }, data: serviceData })
    }
  }

  const plumbingServices = [
    { name: 'Drain Cleaning', duration_minutes: 90, price: 150.0, description: 'Fast professional drain cleaning service.' },
    { name: 'Pipe Repair', duration_minutes: 120, price: 210.0, description: 'Emergency pipe repair and leak sealing.' },
  ]

  for (const serviceData of plumbingServices) {
    const existingService = await prisma.service.findFirst({
      where: { business_id: plumbing.id, name: serviceData.name },
    })
    if (!existingService) {
      await prisma.service.create({ data: { business_id: plumbing.id, ...serviceData } })
    } else {
      await prisma.service.update({ where: { id: existingService.id }, data: serviceData })
    }
  }

  let booking = await prisma.booking.findFirst({
    where: {
      business_id: englishgarden.id,
      client_id: createdClients[0].id,
      service_id: createdServices[0].id,
    },
  })

  if (!booking) {
    booking = await prisma.booking.create({
      data: {
        business_id: englishgarden.id,
        client_id: createdClients[0].id,
        service_id: createdServices[0].id,
        booked_at: new Date(Date.now() + 86400000),
        duration_minutes: 60,
        status: 'pending',
        notes: 'Follow up on system efficiency and filters.',
      },
    })
  } else {
    booking = await prisma.booking.update({
      where: { id: booking.id },
      data: {
        booked_at: new Date(Date.now() + 86400000),
        duration_minutes: 60,
        status: 'pending',
        notes: 'Follow up on system efficiency and filters.',
      },
    })
  }

  let message = await prisma.message.findFirst({
    where: {
      business_id: englishgarden.id,
      client_id: createdClients[1].id,
      sender_type: 'client',
    },
  })

  if (!message) {
    message = await prisma.message.create({
      data: {
        business_id: englishgarden.id,
        client_id: createdClients[1].id,
        sender_type: 'client',
        sender_id: null,
        content: 'Hi, please confirm the booking window for next Thursday.',
        is_read: false,
      },
    })
  } else {
    message = await prisma.message.update({
      where: { id: message.id },
      data: {
        content: 'Hi, please confirm the booking window for next Thursday.',
        is_read: false,
      },
    })
  }

  console.log('Seed complete: admin + business + owner + clients + services + booking + message')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
