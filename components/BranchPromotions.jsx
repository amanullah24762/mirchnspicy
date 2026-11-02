'use client';

import { useBranch } from './BranchProvider';
import { getBranchProfile } from '../data/branchProfiles';
import { usePathname } from 'next/navigation';

export default function BranchPromotions() {
  const { selectedBranch } = useBranch();
  const pathname = usePathname();

  if (!selectedBranch || pathname !== '/') return null;

  const profile = getBranchProfile(selectedBranch);

  return (
    <section className="branch-promotions section" aria-labelledby="branch-promotions-title">
      <div className="branch-promotions-heading">
        <div>
          <p className="eyebrow">OFFERS NEAR YOU</p>
          <h2 id="branch-promotions-title">Deals at {selectedBranch.name}</h2>
        </div>
        <span>{profile.isDemo ? 'Sample offers' : 'Branch offers'}</span>
      </div>

      <div className="branch-promotion-grid">
        {profile.promotions.map((promotion) => (
          <article className="branch-promotion-card" key={promotion.title}>
            <img src={promotion.image} alt="" />
            <div className="branch-promotion-copy">
              <p>{promotion.label}</p>
              <h3>{promotion.title}</h3>
              <span>{promotion.description}</span>
              <a href="#menu-section">View menu <b aria-hidden="true">→</b></a>
            </div>
          </article>
        ))}
      </div>

      {profile.isDemo && (
        <p className="promotion-disclaimer">
          Demo menu and offers are shown for this branch. Final availability and price are confirmed on WhatsApp.
        </p>
      )}
    </section>
  );
}
