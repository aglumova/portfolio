import { Fetcher } from '../../Fetcher';
import { Job } from '../../Job';
import stakeFetcher from './stakeFetcher';
import boostJob from './boostJob';

export const jobs: Job[] = [boostJob];
export const fetchers: Fetcher[] = [stakeFetcher];
