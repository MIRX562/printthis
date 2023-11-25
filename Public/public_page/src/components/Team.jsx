import React from 'react';

const sectionStyle = 'text-gray-600 body-font';
const teamMemberStyles =
	'h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left';

const SocialIcon = ({ iconPath }) => (
	<img src={iconPath} alt='social icon' className='w-5 h-5 cursor-pointer' />
);

const TeamMember = ({ name, role, socialLinks, imgSrc }) => (
	<div className={`p-4 lg:w-1/2 w-full ${teamMemberStyles}`}>
		<img
			alt={name}
			className='flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gray-300 rounded-2xl'
			src={imgSrc}
		/>
		<div className='flex-grow sm:pl-8'>
			<h2 className='title-font font-medium text-lg text-gray-900'>{name}</h2>
			<h3 className='text-gray-500 mb-3'>{role}</h3>
			{socialLinks && (
				<span className='inline-flex'>
					{socialLinks.map((link, index) => (
						<a key={index} href={link.url} className='ml-2 text-gray-500'>
							<SocialIcon iconPath={link.iconPath} />
						</a>
					))}
				</span>
			)}
		</div>
	</div>
);

export default function Team() {
	return (
		<section className={sectionStyle}>
			<div className='container px-10 py-24 mx-auto'>
				<div className='flex flex-col text-center w-full mb-20'>
					<h1 className='text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest'>
						FSTechno TEAM
					</h1>
					<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
						Tim Proyek Kreatif Mahasiswa UIN Imam Bonjol Padang yang senang
						berkarya dan berinovasi dalam ranah Teknologi Informasi
					</p>
				</div>
				<div className='flex flex-wrap -m-4 p-5'>
					<TeamMember
						name='Aulia Arham M.Eng'
						role='Project Leader'
						imgSrc='/Pak Arham.svg'
						socialLinks={[
							{ url: 'link1', iconPath: '/Gmail.svg' },
							{ url: 'link2', iconPath: '/LinkedIn.svg' },
						]}
					/>
					<TeamMember
						name='Aditya Reta'
						role='Desktop App Developer'
						imgSrc='/Adit.svg'
						socialLinks={[
							{ url: 'link1', iconPath: '/Gmail.svg' },
							{ url: 'link2', iconPath: '/LinkedIn.svg' },
						]}
					/>
					<TeamMember
						name='Muhammad Iffan Ramadhan'
						role='Web App Developer'
						imgSrc='/Iffan.svg'
						socialLinks={[
							{ url: 'mirx562@gmail.com', iconPath: '/Gmail.svg' },
							{ url: 'link2', iconPath: '/LinkedIn.svg' },
						]}
					/>
					<TeamMember
						name='Afin Ramadhan Tarmizi'
						role='Hardawre Engineer'
						imgSrc='/Afin.svg'
						socialLinks={[
							{ url: 'link1', iconPath: '/Gmail.svg' },
							{ url: 'link2', iconPath: '/LinkedIn.svg' },
						]}
					/>
					<TeamMember
						name='Abdurrahman Wahid Arni Putra'
						role='UI/UX Designer'
						imgSrc='/Abdurrahman.svg'
						socialLinks={[
							{ url: 'link1', iconPath: '/Gmail.svg' },
							{ url: 'link2', iconPath: '/LinkedIn.svg' },
						]}
					/>
					<TeamMember
						name='Reza Endri Yanto'
						role='System Analyst'
						imgSrc='/Reza.svg'
						socialLinks={[
							{ url: 'link1', iconPath: '/Gmail.svg' },
							{ url: 'link2', iconPath: '/LinkedIn.svg' },
						]}
					/>
					<TeamMember
						name='Desy Reolina Sari'
						role='Technical Writer'
						imgSrc='/Desi.svg'
						socialLinks={[
							{ url: 'link1', iconPath: '/Gmail.svg' },
							{ url: 'link2', iconPath: '/LinkedIn.svg' },
						]}
					/>
				</div>
			</div>
		</section>
	);
}
